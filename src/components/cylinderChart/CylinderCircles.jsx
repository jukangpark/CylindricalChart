import React from "react";
import { StyledCylinderCircle } from "./cylinderChartStyle.js";
import CylinderCircle from "./CylinderCircle.tsx";
import CylinderCircleContainer from "./CylinderCircleContainer.tsx";

const CylinderCircles = ({ circleCount, thresholdArray, itemColor }) => {
  return (
    <CylinderCircleContainer thresholdArray={thresholdArray}>
      {[...Array(circleCount)].map((_, circleIndex) => {
        return (
          <StyledCylinderCircle
            key={circleIndex}
            color={itemColor} // 기본 색상 (CylinderCircleContainer에서 덮어씀)
            delay={circleIndex}
          >
            <CylinderCircle color={itemColor} />
          </StyledCylinderCircle>
        );
      })}
    </CylinderCircleContainer>
  );
};

export default CylinderCircles;
