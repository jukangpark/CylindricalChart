import React, { useMemo, useCallback } from "react";
import { SpeedCylinderCircle } from "./speedChartStyle.js";
import SpeedCircle from "./SpeedCircle.tsx";
import SpeedCircleContainer from "./SpeedCircleContainer.tsx";
import { SpeedCirclesProps } from "./types.ts";
import { getColorForCircle } from "./utils.ts";

const SpeedCircles = ({
  circleCount,
  thresholdArray,
  itemColor,
}: SpeedCirclesProps) => {
  // circleCount 유효성 검사 및 제한
  const safeCircleCount = Math.max(
    0,
    Math.min(Math.floor(circleCount) || 0, 100)
  );

  // 분리된 유틸리티 함수 사용
  const getColorForCircleCallback = useCallback(
    (circleIndex: number): string =>
      getColorForCircle(circleIndex, thresholdArray, itemColor),
    [thresholdArray, itemColor]
  );

  // 원들을 미리 계산하여 메모이제이션
  const circles = useMemo(() => {
    if (safeCircleCount <= 0) return [];

    return [...Array(safeCircleCount)].map((_, circleIndex) => {
      const circleColor = getColorForCircleCallback(circleIndex);

      return (
        <SpeedCylinderCircle key={circleIndex}>
          <SpeedCircle color={circleColor} />
        </SpeedCylinderCircle>
      );
    });
  }, [safeCircleCount, getColorForCircleCallback]);

  // 조건부 렌더링 (early return 완전 제거)
  return safeCircleCount <= 0 ? null : (
    <SpeedCircleContainer thresholdArray={thresholdArray}>
      {circles}
    </SpeedCircleContainer>
  );
};

export default SpeedCircles;
