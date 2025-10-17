import { Threshold, Group } from "./types.ts";
import { UNIT_SIZE } from "./constants.ts";

// 그룹 생성 유틸리티 함수
export const createGroups = (
  childrenArray: any[],
  thresholdArray: Threshold[]
): Group[] => {
  const groups: Group[] = [];

  thresholdArray.forEach((threshold, index) => {
    const nextThreshold = thresholdArray[index + 1];

    // 임계치 범위 계산
    const startValue = index === 0 ? 0 : thresholdArray[index - 1].value;
    const endValue = nextThreshold
      ? nextThreshold.value
      : childrenArray.length * UNIT_SIZE;

    // 인덱스 계산 (10단위 기반)
    const startIndex = Math.floor(startValue / UNIT_SIZE);
    const endIndex = Math.floor(endValue / UNIT_SIZE);

    const groupChildren = childrenArray.slice(startIndex, endIndex);

    // 각 그룹의 너비 비율 계산 (10단위 기반)
    const widthRatio =
      (endValue - startValue) / (childrenArray.length * UNIT_SIZE);

    if (groupChildren.length > 0) {
      groups.push({
        children: groupChildren,
        label: threshold.label,
        color: threshold.color,
        widthRatio,
      });
    }
  });

  return groups;
};

// 원의 색상을 계산하는 유틸리티 함수
export const getColorForCircle = (
  circleIndex: number,
  thresholdArray: Threshold[],
  itemColor: string
): string => {
  const value = (circleIndex + 1) * UNIT_SIZE;

  // thresholdArray에서 해당 값에 맞는 색상 찾기
  for (let i = 0; i < thresholdArray.length; i++) {
    const currentThreshold = thresholdArray[i];
    const nextThreshold = thresholdArray[i + 1];

    if (value <= currentThreshold.value) {
      return currentThreshold.color;
    }

    // 마지막 임계치인 경우
    if (!nextThreshold) {
      return currentThreshold.color;
    }
  }

  // 기본 색상 반환
  return itemColor;
};
