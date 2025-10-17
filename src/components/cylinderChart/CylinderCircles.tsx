import React, { useMemo, useCallback } from "react";
import { StyledCylinderCircle } from "./cylinderChartStyle.js";
import CylinderCircle from "./CylinderCircle.tsx";
import CylinderCircleContainer from "./CylinderCircleContainer.tsx";
import { CylinderCirclesProps } from "./types.ts";
import { getColorForCircle } from "./utils.ts";

const CylinderCircles = ({
  circleCount,
  thresholdArray,
  itemColor,
}: CylinderCirclesProps) => {
  // 분리된 유틸리티 함수 사용
  const getColorForCircleCallback = useCallback(
    (circleIndex: number): string =>
      getColorForCircle(circleIndex, thresholdArray, itemColor),
    [thresholdArray, itemColor]
  );

  // 원들을 미리 계산하여 메모이제이션
  const circles = useMemo(() => {
    return [...Array(circleCount)].map((_, circleIndex) => {
      const circleColor = getColorForCircleCallback(circleIndex);

      return (
        <StyledCylinderCircle
          key={circleIndex}
          color={circleColor}
          delay={circleIndex}
        >
          <CylinderCircle color={circleColor} />
        </StyledCylinderCircle>
      );
    });
  }, [circleCount, getColorForCircleCallback]);

  return (
    <CylinderCircleContainer thresholdArray={thresholdArray}>
      {circles}
    </CylinderCircleContainer>
  );
};

export default CylinderCircles;
