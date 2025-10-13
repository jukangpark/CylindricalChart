import React from "react";
import { VerticalCylinderCircle } from "../components/verticalCylinderChart/verticalCylindricalStyle.js";
import VerticalCylinderSVG from "./VerticalCylinderSVG.tsx";
import VerticalCylinderCircleContainer from "./VerticalCylinderCircleContainer.tsx";

const VerticalCylinderCircles = ({
  circleCount,
  thresholdArray,
  itemColor,
}) => {
  return (
    <VerticalCylinderCircleContainer thresholdArray={thresholdArray}>
      {[...Array(circleCount)].map((_, circleIndex) => {
        return (
          <VerticalCylinderCircle
            key={circleIndex}
            color={itemColor} // 기본 색상 (VerticalCylinderCircleContainer에서 덮어씀)
            delay={circleIndex}
          >
            <VerticalCylinderSVG color={itemColor} />
          </VerticalCylinderCircle>
        );
      })}
    </VerticalCylinderCircleContainer>
  );
};

export default VerticalCylinderCircles;
