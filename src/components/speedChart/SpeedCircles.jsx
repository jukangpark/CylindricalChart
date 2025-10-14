import React from "react";
import { SpeedCylinderCircle } from "./speedChartStyle.js";
import SpeedCircle from "./SpeedCircle.tsx";
import SpeedCircleContainer from "./SpeedCircleContainer.tsx";

const SpeedCircles = ({ circleCount, thresholdArray, itemColor }) => {
  return (
    <SpeedCircleContainer thresholdArray={thresholdArray}>
      {[...Array(circleCount)].map((_, circleIndex) => {
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
