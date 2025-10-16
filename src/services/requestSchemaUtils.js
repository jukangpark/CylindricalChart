// 요청 스키마 생성 관련 유틸리티 함수들

/**
 * 기본 메트릭 정의 생성
 * @param {string} metricType - 메트릭 타입 (cpu, memory 등)
 * @param {string} protocolInfo - 프로토콜 정보
 * @param {string} metricValueType - 메트릭 값 타입 (avg, max 등)
 * @returns {Object} 메트릭 정의 객체
 */
const createMetricDefinition = (
  metricType,
  protocolInfo,
  metricValueType = "avg"
) => {
  const capitalizedType =
    metricType.charAt(0).toUpperCase() + metricType.slice(1);

  return {
    id: `server.${capitalizedType}_Utilization`,
    resourceType: `server.${capitalizedType}`,
    name: "Utilization",
    displayName: `${capitalizedType} 사용률`,
    displayKey: `sms.${metricType}_utilization`,
    alias: "U",
    units: "PERCENTAGE",
    measurementType: "METRIC",
    numericType: "DYNAMIC",
    deleted: false,
    protocolInfo,
    osType: "ALL",
  };
};

/**
 * 기본 데이터 조건 생성
 * @param {string} metricType - 메트릭 타입
 * @param {string} metricValueType - 메트릭 값 타입
 * @returns {Object} 데이터 조건 객체
 */
const createBaseDataCondition = (metricType, metricValueType = "avg") => {
  // Fixed time range to avoid re-renders due to changing timestamps
  const FIXED_START_TIME = 1704067200000; // 2024-01-01T00:00:00.000Z
  const FIXED_END_TIME = 1704070800000; // 2024-01-01T01:00:00.000Z

  return {
    metricData: [
      {
        definition: createMetricDefinition(
          metricType,
          "4.3.24.0",
          metricValueType
        ),
        tagFilters: [],
        metricValueTypes: [metricValueType],
        groupBys: [],
        limitCount: "",
      },
    ],
    metricCalculation: "NONE",
    mode: "NOW",
    startTime: FIXED_START_TIME,
    endTime: FIXED_END_TIME,
    interval: 0,
  };
};

/**
 * 설정에서 요청 스키마 생성
 * @param {Object} settings - 설정 객체
 * @param {string} chartType - 차트 타입
 * @returns {Object} 요청 스키마
 */
export const generateRequestSchema = (settings, chartType) => {
  const baseSchema = {
    visualization:
      chartType === "cylinder"
        ? "CYLINDER_CHART"
        : chartType === "equalizer"
        ? "EQUALIZER_CHART"
        : "SPEED_CHART",
    dataConditionType: settings.dataConditionType || "INDIVIDUAL",
  };

  // 실린더 차트 전용 설정
  if (chartType === "cylinder") {
    baseSchema.viewCount = settings.viewCount || "AUTO";
    baseSchema.rotationTime = settings.rotationTime || "AUTO";
  }

  // 이퀄라이저 차트 전용 설정
  if (chartType === "equalizer") {
    baseSchema.viewCount = settings.viewCount || "TEN";
    baseSchema.rotationTime = settings.rotationTime || "SEC_10";
    baseSchema.maxValueSetType = settings.maxValueSetType || "AUTO";
    baseSchema.max = settings.max || 100;
    baseSchema.useViewSum =
      settings.useViewSum !== undefined ? settings.useViewSum : true;

    // 이퀄라이저 차트는 기본 DataCondition만 사용
    baseSchema.dataCondition = createBaseDataCondition("cpu", "avg");
    return baseSchema;
  }

  // InData 설정
  if (settings.inData && settings.inData !== "none") {
    baseSchema.inData = {
      definition: createMetricDefinition(settings.inData, "4.3.24.0", "avg"),
      tagFilters: [],
      metricValueTypes: ["avg"],
      groupBys: [],
      limitCount: "",
    };
  }

  // OutData 설정
  if (settings.outData && settings.outData !== "none") {
    baseSchema.outData = {
      definition: createMetricDefinition(settings.outData, "4.4.5.0", "max"),
      tagFilters: [],
      metricValueTypes: ["max"],
      groupBys: [],
      limitCount: "",
    };
  }

  // DataCondition (기본 설정)
  if (!settings.inData || settings.inData === "none") {
    baseSchema.dataCondition = createBaseDataCondition("cpu", "avg");
  }

  return baseSchema;
};

/**
 * SettingsDrawer에서 사용하는 JSON 스키마 생성 (기존 generateJsonSchema와 동일)
 * @param {Object} localSettings - 로컬 설정 객체
 * @param {string} chartType - 차트 타입
 * @returns {Object} 요청 스키마
 */
export const generateJsonSchema = (localSettings, chartType) => {
  const baseSchema = {
    visualization:
      chartType === "cylinder"
        ? "CYLINDER_CHART"
        : chartType === "equalizer"
        ? "EQUALIZER_CHART"
        : "SPEED_CHART",
    dataConditionType: localSettings.dataConditionType || "INDIVIDUAL",
  };

  // 실린더 차트 전용 설정
  if (chartType === "cylinder") {
    baseSchema.viewCount = localSettings.viewCount || "AUTO";
    baseSchema.rotationTime = localSettings.rotationTime || "AUTO";
  }

  // 이퀄라이저 차트 전용 설정
  if (chartType === "equalizer") {
    baseSchema.viewCount = localSettings.viewCount || "TEN";
    baseSchema.rotationTime = localSettings.rotationTime || "SEC_10";
    baseSchema.maxValueSetType = localSettings.maxValueSetType || "AUTO";
    baseSchema.max = localSettings.max || 100;
    baseSchema.useViewSum =
      localSettings.useViewSum !== undefined ? localSettings.useViewSum : true;

    // 이퀄라이저 차트는 기본 DataCondition만 사용
    baseSchema.dataCondition = createBaseDataCondition("cpu", "avg");
    return baseSchema;
  }

  // InData 설정
  if (localSettings.inData && localSettings.inData !== "none") {
    baseSchema.inData = {
      definition: createMetricDefinition(
        localSettings.inData,
        "4.3.24.0",
        "avg"
      ),
      tagFilters: [],
      metricValueTypes: ["avg"],
      groupBys: [],
      limitCount: "",
    };
  }

  // OutData 설정
  if (localSettings.outData && localSettings.outData !== "none") {
    baseSchema.outData = {
      definition: createMetricDefinition(
        localSettings.outData,
        "4.4.5.0",
        "max"
      ),
      tagFilters: [],
      metricValueTypes: ["max"],
      groupBys: [],
      limitCount: "",
    };
  }

  // DataCondition (기본 설정)
  if (!localSettings.inData || localSettings.inData === "none") {
    baseSchema.dataCondition = createBaseDataCondition("cpu", "avg");
  }

  return baseSchema;
};
