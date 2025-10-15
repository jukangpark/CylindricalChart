// 차트 API 요청 시뮬레이션 서비스
// README의 API 스펙을 기반으로 mock 요청/응답 처리

// API 엔드포인트
const API_ENDPOINTS = {
  CYLINDER_CHART: "/api/widget/live/cylinderChart",
  SPEED_CHART: "/api/widget/live/speedChart",
};

// Mock 응답 데이터 (README 예시 기반)
const MOCK_RESPONSES = {
  // 실린더 차트 응답 예시들
  cylinderChart: {
    // 예시 1: 단일 DataCondition 사용
    singleDataCondition: {
      success: true,
      data: [
        {
          timestamp: 1760156880000,
          ubuntu2204_213_133_server_Cpu_Utilization_avg: 2.483333333333334,
          ubuntu2004_server_Cpu_Utilization_avg: 0.4749999999999999,
          ubuntu2204_230_104_server_Cpu_Utilization_avg: 7.708333333333333,
          ubuntu2204_213_107_server_Cpu_Utilization_avg: 20.458333333333332,
        },
        {
          timestamp: 1760156760000,
          ubuntu2204_213_133_server_Cpu_Utilization_avg: 2.833333333333333,
          ubuntu2204_213_107_server_Cpu_Utilization_avg: 19.32083333333334,
          ubuntu2004_server_Cpu_Utilization_avg: 0.4916666666666667,
          ubuntu2204_230_104_server_Cpu_Utilization_avg: 7.591666666666667,
        },
        {
          timestamp: 1760156640000,
          ubuntu2204_230_104_server_Cpu_Utilization_avg: 7.620833333333334,
          ubuntu2004_server_Cpu_Utilization_avg: 0.4833333333333334,
          ubuntu2204_213_107_server_Cpu_Utilization_avg: 25.87083333333333,
          ubuntu2204_213_133_server_Cpu_Utilization_avg: 2.545833333333333,
        },
      ],
      errorCode: null,
      errorMsgArgs: null,
      errorData: null,
    },
    // 예시 3: 파일시스템 사용률 (GroupBy 활용)
    fileSystemData: {
      success: true,
      data: [
        {
          timestamp: 1760156880000,
          boot_server_FileSystem_Utilization_avg: 44.1,
          data4_server_FileSystem_Utilization_avg: 12.57,
          app_server_FileSystem_Utilization_avg: 39.09,
          data_server_FileSystem_Utilization_avg: 9.69,
          boot_efi_server_FileSystem_Utilization_avg: 0.57,
        },
        {
          timestamp: 1760156760000,
          data_server_FileSystem_Utilization_avg: 9.69,
          boot_server_FileSystem_Utilization_avg: 13.79,
          app_server_FileSystem_Utilization_avg: 36.31,
          boot_efi_server_FileSystem_Utilization_avg: 2.57,
          data4_server_FileSystem_Utilization_avg: 12.57,
        },
        {
          timestamp: 1760156640000,
          boot_server_FileSystem_Utilization_avg: 57.73,
          boot_efi_server_FileSystem_Utilization_avg: 0.57,
          app_server_FileSystem_Utilization_avg: 74.4,
          data_server_FileSystem_Utilization_avg: 9.69,
          data4_server_FileSystem_Utilization_avg: 12.57,
        },
      ],
      errorCode: null,
      errorMsgArgs: null,
      errorData: null,
    },
    // 복합 메트릭 (InData + OutData + DataCondition)
    complexData: {
      success: true,
      data: [
        {
          timestamp: 1760156880000,
          ubuntu2204_230_104_server_Cpu_Utilization_avg: 7.708333333333333,
          ubuntu2204_213_107_server_Cpu_Utilization_avg: 20.458333333333332,
          ubuntu2004_server_Cpu_Utilization_avg: 0.4749999999999999,
          ubuntu2204_213_133_server_Cpu_Utilization_avg: 2.483333333333334,
          ubuntu2204_213_107_server_FileSystems_Utilization_avg: 40.784244415596525,
          ubuntu2204_230_104_server_FileSystems_Utilization_avg: 14.404467622134375,
          ubuntu2204_213_133_server_FileSystems_Utilization_avg: 36.74985631018449,
          ubuntu2004_server_FileSystems_Utilization_avg: 72.64297283719327,
          ubuntu2204_213_107_server_Memory_Utilization_avg: 84.34083333333335,
          ubuntu2004_server_Memory_Utilization_avg: 35.08916666666668,
          ubuntu2204_213_133_server_Memory_Utilization_avg: 22.616666666666664,
          ubuntu2204_230_104_server_Memory_Utilization_avg: 6.359166666666667,
        },
      ],
      errorCode: null,
      errorMsgArgs: null,
      errorData: null,
    },
  },
  // 스피드 차트 응답 예시들
  speedChart: {
    // 예시 1: 기본 DataCondition 사용
    singleDataCondition: {
      success: true,
      data: [
        {
          timestamp: 1760156880000,
          server_Cpu_Utilization_avg: 7.78125,
        },
        {
          timestamp: 1760156760000,
          server_Cpu_Utilization_avg: 7.559375000000001,
        },
        {
          timestamp: 1760156640000,
          server_Cpu_Utilization_avg: 9.130208333333332,
        },
      ],
      errorCode: null,
      errorMsgArgs: null,
      errorData: null,
    },
    // 예시 3: 파일시스템 사용률
    fileSystemData: {
      success: true,
      data: [
        {
          timestamp: 1760156880000,
          server_FileSystems_Utilization_avg: 35.797201761448605,
        },
        {
          timestamp: 1760156760000,
          server_FileSystems_Utilization_avg: 41.14108464786598,
        },
        {
          timestamp: 1760156640000,
          server_FileSystems_Utilization_avg: 41.15093042861683,
        },
      ],
      errorCode: null,
      errorMsgArgs: null,
      errorData: null,
    },
    // 복합 메트릭
    complexData: {
      success: true,
      data: [
        {
          timestamp: 1760156880000,
          server_Cpu_Utilization_avg: 7.78125,
          server_FileSystem_Utilization_avg: 28.7452,
          server_Memory_Utilization_avg: 37.10145833333334,
        },
        {
          timestamp: 1760156760000,
          server_Cpu_Utilization_avg: 7.559375000000001,
          server_FileSystem_Utilization_avg: 32.00861111111111,
          server_Memory_Utilization_avg: 37.0996875,
        },
        {
          timestamp: 1760156640000,
          server_Cpu_Utilization_avg: 9.130208333333332,
          server_FileSystem_Utilization_avg: 32.01166666666667,
          server_Memory_Utilization_avg: 37.08708333333334,
        },
      ],
      errorCode: null,
      errorMsgArgs: null,
      errorData: null,
    },
  },
};

// 요청 스키마에 따른 적절한 mock 응답 선택
const selectMockResponse = (requestSchema, chartType) => {
  const responses =
    chartType === "cylinder"
      ? MOCK_RESPONSES.cylinderChart
      : MOCK_RESPONSES.speedChart;

  // InData와 OutData가 모두 있는 경우 (복합 메트릭)
  if (
    requestSchema.inData &&
    requestSchema.outData &&
    requestSchema.inData !== "none" &&
    requestSchema.outData !== "none"
  ) {
    return responses.complexData;
  }

  // 파일시스템 관련 메트릭인 경우
  if (
    requestSchema.dataCondition?.metricData?.[0]?.definition?.id?.includes(
      "FileSystem"
    ) ||
    requestSchema.inData?.definition?.id?.includes("FileSystem") ||
    requestSchema.outData?.definition?.id?.includes("FileSystem")
  ) {
    return responses.fileSystemData;
  }

  // 기본 단일 메트릭 응답
  return responses.singleDataCondition;
};

// API 요청 시뮬레이션
export const simulateApiRequest = async (requestSchema) => {
  // 최소한의 지연으로 거의 즉시 응답 (비동기 처리 유지)
  await new Promise((resolve) => setTimeout(resolve, 50));

  const chartType =
    requestSchema.visualization === "CYLINDER_CHART" ? "cylinder" : "speed";
  const mockResponse = selectMockResponse(requestSchema, chartType);

  // 요청 로그 출력
  console.log("🚀 API 요청 시뮬레이션:", {
    endpoint:
      chartType === "cylinder"
        ? API_ENDPOINTS.CYLINDER_CHART
        : API_ENDPOINTS.SPEED_CHART,
    requestBody: requestSchema,
    response: mockResponse,
  });

  return {
    success: true,
    data: mockResponse,
    requestSchema,
    timestamp: new Date().toISOString(),
  };
};

// 요청 스키마를 실제 API 형식으로 변환
export const transformRequestSchema = (schema) => {
  const transformed = { ...schema };

  // 시간 설정 (현재 시간 기준)
  const now = Date.now();
  const oneHourAgo = now - 3600000;

  if (transformed.dataCondition) {
    transformed.dataCondition.startTime = oneHourAgo;
    transformed.dataCondition.endTime = now;
  }

  return transformed;
};

export default {
  simulateApiRequest,
  transformRequestSchema,
  API_ENDPOINTS,
  MOCK_RESPONSES,
};
