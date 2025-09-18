import React from "react";
import { CylinderCircle } from "../components/horizontalCylinderChart/horizontalCylindricalStyle.js";
import CylinderSVG from "./CylinderSVG.tsx";
import CylinderCircleContainer from "./CylinderCircleContainer.tsx";

const CylinderCircles = ({
  circleCount,
  thresholdArray,
  maxValue = 1000,
  itemColor,
}) => {
  return (
    <CylinderCircleContainer
      thresholdArray={thresholdArray}
      maxValue={maxValue}
    >
      {[...Array(circleCount)].map((_, circleIndex) => {
        // 임계치 배열을 기반으로 색상 결정
        const ratio = circleIndex / circleCount;
        const currentValue = ratio * maxValue;

        console.log("currentValue", currentValue);

        // 현재 값에 해당하는 임계치 색상 찾기
        let circleColor = itemColor; // 기본 색상
        for (let i = 0; i < thresholdArray.length; i++) {
          if (currentValue <= thresholdArray[i].value) {
            circleColor = thresholdArray[i].color;
            break;
          }
        }

        console.log("circleColor", circleColor);

        return (
          <CylinderCircle
            key={circleIndex}
            color={circleColor}
            delay={circleIndex}
          >
            <CylinderSVG color={circleColor} />
          </CylinderCircle>
        );
      })}
    </CylinderCircleContainer>
  );
};

export default CylinderCircles;
