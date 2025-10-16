// 표시 이름 생성 관련 유틸리티 함수들

/**
 * 메트릭 타입별 한글 이름 매핑
 */
const METRIC_NAMES = {
  cpu: "CPU",
  memory: "Memory",
  filesystem: "FS",
  disk: "Disk",
  network: "Network",
  unknown: "Unknown",
};

/**
 * 스피드 차트용 메트릭 타입별 한글 이름 매핑
 */
const SPEED_CHART_METRIC_NAMES = {
  cpu: "CPU 사용률",
  memory: "메모리 사용률",
  filesystem: "파일시스템 사용률",
  disk: "디스크 사용률",
  network: "네트워크 사용률",
  unknown: "알 수 없는 메트릭",
};

/**
 * 실린더 차트용 표시 이름 생성
 * @param {string} serverName - 서버 이름
 * @param {string} metricType - 메트릭 타입
 * @param {Object} requestSchema - 요청 스키마
 * @returns {string} 표시 이름
 */
export const generateCylinderDisplayName = (
  serverName,
  metricType,
  requestSchema
) => {
  const metricName = METRIC_NAMES[metricType] || "Unknown";

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

/**
 * 스피드 차트용 표시 이름 생성
 * @param {string} metricType - 메트릭 타입
 * @param {Object} requestSchema - 요청 스키마
 * @returns {string} 표시 이름
 */
export const generateSpeedChartDisplayName = (metricType, requestSchema) => {
  return SPEED_CHART_METRIC_NAMES[metricType] || "알 수 없는 메트릭";
};

/**
 * 이퀄라이저 차트용 표시 이름 생성
 * @param {string} serverName - 서버 이름
 * @param {string} metricType - 메트릭 타입
 * @param {Object} requestSchema - 요청 스키마
 * @returns {string} 표시 이름
 */
export const generateEqualizerDisplayName = (
  serverName,
  metricType,
  requestSchema
) => {
  // 이퀄라이저 차트는 서버명만 표시 (메트릭 타입 구분 없음)
  return serverName;
};
