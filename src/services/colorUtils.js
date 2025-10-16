// 색상 관련 유틸리티 함수들

// 색상 팔레트
export const COLOR_PALETTE = [
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

/**
 * 서버 이름에서 색상을 결정하는 함수
 * @param {string} serverName - 서버 이름
 * @param {number} index - 인덱스 (fallback용)
 * @returns {string} 색상 코드
 */
export const getColorForServer = (serverName, index = 0) => {
  if (!serverName) return COLOR_PALETTE[index % COLOR_PALETTE.length];

  // 서버 이름의 해시값을 기반으로 색상 결정
  let hash = 0;
  for (let i = 0; i < serverName.length; i++) {
    hash = serverName.charCodeAt(i) + ((hash << 5) - hash);
  }
  return COLOR_PALETTE[Math.abs(hash) % COLOR_PALETTE.length];
};

/**
 * 인덱스 기반으로 색상을 반환하는 함수
 * @param {number} index - 인덱스
 * @returns {string} 색상 코드
 */
export const getColorByIndex = (index) => {
  return COLOR_PALETTE[index % COLOR_PALETTE.length];
};
