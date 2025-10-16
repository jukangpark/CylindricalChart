// 데이터 파싱 관련 유틸리티 함수들

/**
 * 서버 이름 추출 (예: ubuntu2204_213_133_server_Cpu_Utilization_avg -> ubuntu2204-213-133)
 * @param {string} key - API 키
 * @returns {string} 서버 이름
 */
export const extractServerName = (key) => {
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

/**
 * 메트릭 타입 추출 (예: server_Cpu_Utilization_avg -> cpu)
 * @param {string} key - API 키
 * @returns {string} 메트릭 타입
 */
export const extractMetricType = (key) => {
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

/**
 * 값을 소수점 2자리로 반올림
 * @param {number} value - 원본 값
 * @returns {number} 반올림된 값
 */
export const roundToTwoDecimals = (value) => {
  return Math.round(value * 100) / 100;
};

/**
 * API 응답에서 최신 데이터 추출
 * @param {Object} apiResponse - API 응답 객체
 * @returns {Object|null} 최신 데이터 또는 null
 */
export const extractLatestData = (apiResponse) => {
  if (!apiResponse?.data?.data || !Array.isArray(apiResponse.data.data)) {
    return null;
  }

  const responseData = apiResponse.data.data;
  return responseData[0] || null;
};

/**
 * timestamp 필드를 제외한 데이터 엔트리 필터링
 * @param {Array} entries - Object.entries() 결과
 * @returns {Array} 필터링된 엔트리
 */
export const filterNonTimestampEntries = (entries) => {
  return entries.filter(([key]) => key !== "timestamp");
};
