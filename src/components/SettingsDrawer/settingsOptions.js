// SettingsDrawer의 설정 옵션 관련 유틸리티

/**
 * 표시 개수 옵션
 */
export const getViewCountOptions = () => {
  return [
    { value: "AUTO", label: "자동" },
    { value: "FIVE", label: "5개" },
    { value: "TEN", label: "10개" },
    { value: "TWENTY", label: "20개" },
  ];
};

/**
 * 회전 시간 옵션
 */
export const getRotationTimeOptions = () => {
  return [
    { value: "AUTO", label: "자동" },
    { value: "SEC_10", label: "10초" },
    { value: "SEC_30", label: "30초" },
    { value: "MIN_1", label: "1분" },
  ];
};

/**
 * 데이터 조건 타입 옵션
 */
export const getDataConditionTypeOptions = () => {
  return [
    { value: "INDIVIDUAL", label: "개별" },
    { value: "ALL", label: "전체" },
  ];
};

/**
 * 인바운드 데이터 옵션
 */
export const getInDataOptions = () => {
  return [
    { value: "none", label: "사용 안함" },
    { value: "cpu", label: "CPU 사용률" },
    { value: "memory", label: "메모리 사용률" },
    { value: "disk", label: "디스크 사용률" },
    { value: "network", label: "네트워크 사용률" },
  ];
};

/**
 * 아웃바운드 데이터 옵션
 */
export const getOutDataOptions = () => {
  return [
    { value: "none", label: "사용 안함" },
    { value: "cpu", label: "CPU 사용률" },
    { value: "memory", label: "메모리 사용률" },
    { value: "disk", label: "디스크 사용률" },
    { value: "network", label: "네트워크 사용률" },
  ];
};

/**
 * 최대값 설정 타입 옵션
 */
export const getMaxValueSetTypeOptions = () => {
  return [
    { value: "AUTO", label: "자동" },
    { value: "MANUAL", label: "수동" },
  ];
};

/**
 * 회전 시간을 밀리초로 변환
 * @param {string} rotationTime - 회전 시간 설정
 * @returns {number|null} 밀리초 값 또는 null
 */
export const getRotationTimeInMs = (rotationTime) => {
  switch (rotationTime) {
    case "SEC_10":
      return 10000;
    case "SEC_30":
      return 30000;
    case "MIN_1":
      return 60000;
    default:
      return null;
  }
};

/**
 * 자동 회전이 활성화되었는지 확인
 * @param {string} rotationTime - 회전 시간 설정
 * @returns {boolean} 자동 회전 활성화 여부
 */
export const isAutoRotationEnabled = (rotationTime) => {
  return rotationTime !== "AUTO";
};

