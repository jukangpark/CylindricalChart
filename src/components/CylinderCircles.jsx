import React from "react";
import { CylinderCircle } from "../components/horizontalCylinderChart/horizontalCylindricalStyle.js";
import CylinderSVG from "./CylinderSVG.tsx";
import CylinderCircleContainer from "./CylinderCircleContainer.tsx";

const CylinderCircles = ({ circleCount, thresholdArray, itemColor }) => {
  return (
    <CylinderCircleContainer thresholdArray={thresholdArray}>
      {[...Array(circleCount)].map((_, circleIndex) => {
        return (
          <CylinderCircle
            key={circleIndex}
            color={itemColor} // 기본 색상 (CylinderCircleContainer에서 덮어씀)
            delay={circleIndex}
          >
            <CylinderSVG color={itemColor} />
          </CylinderCircle>
        );
      })}
    </CylinderCircleContainer>
  );
};

export default CylinderCircles;
