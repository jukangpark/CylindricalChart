import React from "react";
import { SpeedCylinderCircle } from "./speedChartStyle.js";
import SpeedCircle from "./SpeedCircle.tsx";
import SpeedCircleContainer from "./SpeedCircleContainer.tsx";

const SpeedCircles = ({ circleCount, thresholdArray, itemColor }) => {
  // circleCount 유효성 검사 및 제한
  const safeCircleCount = Math.max(
    0,
    Math.min(Math.floor(circleCount) || 0, 100)
  );

  if (safeCircleCount <= 0) return null;

  return (
    <SpeedCircleContainer thresholdArray={thresholdArray}>
      {[...Array(safeCircleCount)].map((_, circleIndex) => {
        return (
          <SpeedCylinderCircle
            key={circleIndex}
            color={itemColor} // 기본 색상 (SpeedCircleContainer 덮어씀)
            delay={circleIndex}
          >
            <SpeedCircle color={itemColor} />
          </SpeedCylinderCircle>
        );
      })}
    </SpeedCircleContainer>
  );
};

export default SpeedCircles;
