// API 응답을 차트 데이터로 변환하는 매퍼 서비스
// README의 API 응답 형식을 차트 컴포넌트가 사용하는 데이터 형식으로 변환

// transformRequestSchema import (chartApiService에서)
import { transformRequestSchema, simulateApiRequest } from "./chartApiService";

// 색상 팔레트
const COLOR_PALETTE = [
  "#007bff", // 파란색
  "#28a745", // 녹색
  "#ffc107", // 노란색
  "#dc3545", // 빨간색
  "#6f42c1", // 보라색
  "#20c997", // 청록색
  "#fd7e14", // 주황색
  "#6c757d", // 회색
  "#e83e8c", // 분홍색
  "#17a2b8", // 하늘색
];

// 서버 이름에서 색상 매핑
const getColorForServer = (serverName, index = 0) => {
  if (!serverName) return COLOR_PALETTE[index % COLOR_PALETTE.length];

  // 서버 이름의 해시값을 기반으로 색상 결정
  let hash = 0;
  for (let i = 0; i < serverName.length; i++) {
    hash = serverName.charCodeAt(i) + ((hash << 5) - hash);
  }
  return COLOR_PALETTE[Math.abs(hash) % COLOR_PALETTE.length];
};

// 실린더 차트 데이터 변환
export const mapApiResponseToCylinderChart = (apiResponse, requestSchema) => {
  if (!apiResponse?.data?.data || !Array.isArray(apiResponse.data.data)) {
    return [];
  }

  const responseData = apiResponse.data.data;
  const latestData = responseData[0]; // 가장 최신 데이터 사용

  if (!latestData) return [];

  const chartData = [];
  let colorIndex = 0;

  // API 응답의 각 필드를 차트 데이터로 변환
  Object.entries(latestData).forEach(([key, value]) => {
    // timestamp 필드는 제외
    if (key === "timestamp") return;

    // 서버 이름과 메트릭 타입 추출
    const serverName = extractServerName(key);
    const metricType = extractMetricType(key);
    const displayName = generateDisplayName(
      serverName,
      metricType,
      requestSchema
    );

    chartData.push({
      value: Math.round(value * 100) / 100, // 소수점 2자리로 반올림
      label: displayName,
      color: getColorForServer(serverName, colorIndex++),
      timestamp: latestData.timestamp,
      serverName: serverName,
      metricType: metricType,
    });
  });

  // 값 기준으로 내림차순 정렬
  return chartData.sort((a, b) => b.value - a.value);
};

// 스피드 차트 데이터 변환
export const mapApiResponseToSpeedChart = (apiResponse, requestSchema) => {
  if (!apiResponse?.data?.data || !Array.isArray(apiResponse.data.data)) {
    return [];
  }

  const responseData = apiResponse.data.data;
  const latestData = responseData[0]; // 가장 최신 데이터 사용

  if (!latestData) return [];

  const chartData = [];
  let colorIndex = 0;

  // API 응답의 각 필드를 차트 데이터로 변환
  Object.entries(latestData).forEach(([key, value]) => {
    // timestamp 필드는 제외
    if (key === "timestamp") return;

    // 메트릭 타입 추출
    const metricType = extractMetricType(key);
    const displayName = generateSpeedChartDisplayName(
      metricType,
      requestSchema
    );

    chartData.push({
      value: Math.round(value * 100) / 100, // 소수점 2자리로 반올림
      label: displayName,
      color: COLOR_PALETTE[colorIndex % COLOR_PALETTE.length],
      timestamp: latestData.timestamp,
      metricType: metricType,
      unit: "PERCENTAGE",
    });

    colorIndex++;
  });

  return chartData;
};

// 서버 이름 추출 (예: ubuntu2204_213_133_server_Cpu_Utilization_avg -> ubuntu2204-213-133)
const extractServerName = (key) => {
  const parts = key.split("_");
  const serverParts = [];

  for (let i = 0; i < parts.length; i++) {
    if (parts[i] === "server") break;
    serverParts.push(parts[i]);
  }

  if (serverParts.length === 0) return "Unknown Server";

  // IP 주소 형태로 변환 (ubuntu2204_213_133 -> ubuntu2204-213-133)
  return serverParts.join("-");
};

// 메트릭 타입 추출 (예: server_Cpu_Utilization_avg -> cpu)
const extractMetricType = (key) => {
  if (key.includes("Cpu_Utilization")) return "cpu";
  if (key.includes("Memory_Utilization")) return "memory";
  if (
    key.includes("FileSystem_Utilization") ||
    key.includes("FileSystems_Utilization")
  )
    return "filesystem";
  if (key.includes("Disk_Utilization")) return "disk";
  if (key.includes("Network_Utilization")) return "network";
  return "unknown";
};

// 실린더 차트용 표시 이름 생성
const generateDisplayName = (serverName, metricType, requestSchema) => {
  const metricNames = {
    cpu: "CPU",
    memory: "Memory",
    filesystem: "FS",
    disk: "Disk",
    network: "Network",
    unknown: "Unknown",
  };

  const metricName = metricNames[metricType] || "Unknown";

  // InData/OutData가 있는 경우 구분 표시
  if (requestSchema.inData && requestSchema.outData) {
    if (requestSchema.inData.definition?.id?.includes(metricName)) {
      return `${serverName} (In)`;
    }
    if (requestSchema.outData.definition?.id?.includes(metricName)) {
      return `${serverName} (Out)`;
    }
  }

  return `${serverName} ${metricName}`;
};

// 스피드 차트용 표시 이름 생성
const generateSpeedChartDisplayName = (metricType, requestSchema) => {
  const metricNames = {
    cpu: "CPU 사용률",
    memory: "메모리 사용률",
    filesystem: "파일시스템 사용률",
    disk: "디스크 사용률",
    network: "네트워크 사용률",
    unknown: "알 수 없는 메트릭",
  };

  return metricNames[metricType] || "알 수 없는 메트릭";
};

// 설정 변경에 따른 데이터 새로고침
export const refreshChartData = async (settings, chartType) => {
  try {
    // API 요청 스키마 생성
    const requestSchema = generateRequestSchema(settings, chartType);
    const transformedSchema = transformRequestSchema(requestSchema);

    // API 요청 시뮬레이션
    const apiResponse = await simulateApiRequest(transformedSchema);

    // 차트 타입에 따른 데이터 변환
    if (chartType === "cylinder") {
      return mapApiResponseToCylinderChart(apiResponse, requestSchema);
    } else {
      return mapApiResponseToSpeedChart(apiResponse, requestSchema);
    }
  } catch (error) {
    console.error("차트 데이터 새로고침 실패:", error);
    return [];
  }
};

// 설정에서 요청 스키마 생성 (SettingsDrawer의 generateJsonSchema와 동일)
const generateRequestSchema = (settings, chartType) => {
  const baseSchema = {
    visualization: chartType === "cylinder" ? "CYLINDER_CHART" : "SPEED_CHART",
    dataConditionType: settings.dataConditionType || "INDIVIDUAL",
  };

  // 실린더 차트 전용 설정
  if (chartType === "cylinder") {
    baseSchema.viewCount = settings.viewCount || "AUTO";
    baseSchema.rotationTime = settings.rotationTime || "AUTO";
  }

  // InData 설정
  if (settings.inData && settings.inData !== "none") {
    baseSchema.inData = {
      definition: {
        id: `server.${
          settings.inData.charAt(0).toUpperCase() + settings.inData.slice(1)
        }_Utilization`,
        resourceType: `server.${
          settings.inData.charAt(0).toUpperCase() + settings.inData.slice(1)
        }`,
        name: "Utilization",
        displayName: `${
          settings.inData.charAt(0).toUpperCase() + settings.inData.slice(1)
        } 사용률`,
        displayKey: `sms.${settings.inData}_utilization`,
        alias: "U",
        units: "PERCENTAGE",
        measurementType: "METRIC",
        numericType: "DYNAMIC",
        deleted: false,
        protocolInfo: "4.3.24.0",
        osType: "ALL",
      },
      tagFilters: [],
      metricValueTypes: ["avg"],
      groupBys: [],
      limitCount: "",
    };
  }

  // OutData 설정
  if (settings.outData && settings.outData !== "none") {
    baseSchema.outData = {
      definition: {
        id: `server.${
          settings.outData.charAt(0).toUpperCase() + settings.outData.slice(1)
        }_Utilization`,
        resourceType: `server.${
          settings.outData.charAt(0).toUpperCase() + settings.outData.slice(1)
        }`,
        name: "Utilization",
        displayName: `${
          settings.outData.charAt(0).toUpperCase() + settings.outData.slice(1)
        } 사용률`,
        displayKey: `sms.${settings.outData}_utilization`,
        alias: "U",
        units: "PERCENTAGE",
        measurementType: "METRIC",
        numericType: "DYNAMIC",
        deleted: false,
        protocolInfo: "4.4.5.0",
        osType: "ALL",
      },
      tagFilters: [],
      metricValueTypes: ["max"],
      groupBys: [],
      limitCount: "",
    };
  }

  // DataCondition (기본 설정)
  if (!settings.inData || settings.inData === "none") {
    baseSchema.dataCondition = {
      metricData: [
        {
          definition: {
            id: "server.Cpu_Utilization",
            resourceType: "server.Cpu",
            name: "Utilization",
            displayName: "CPU 사용률",
            displayKey: "sms.cpu_utilization",
            alias: "U",
            units: "PERCENTAGE",
            measurementType: "METRIC",
            numericType: "DYNAMIC",
            deleted: false,
            protocolInfo: "4.3.24.0",
            osType: "ALL",
          },
          tagFilters: [],
          metricValueTypes: ["avg"],
          groupBys: [],
          limitCount: "",
        },
      ],
      metricCalculation: "NONE",
      mode: "NOW",
      startTime: Date.now() - 3600000, // 1시간 전
      endTime: Date.now(),
      interval: 0,
    };
  }

  return baseSchema;
};

const chartDataMapper = {
  mapApiResponseToCylinderChart,
  mapApiResponseToSpeedChart,
  refreshChartData,
  generateRequestSchema,
};

export default chartDataMapper;
