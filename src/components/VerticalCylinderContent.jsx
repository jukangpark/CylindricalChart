import React from "react";
import {
  VerticalCylinderFill,
  VerticalValueDisplay,
} from "../components/verticalCylinderChart/verticalCylindricalStyle.js";
import VerticalCylinderCircles from "./VerticalCylinderCircles.jsx";

const VerticalCylinderContent = ({
  item,
  fillHeight,
  circleCount,
  thresholdArray,
}) => {
  return (
    <VerticalCylinderFill
      color={item.color}
      fillHeight={fillHeight}
      fillHeightValue={fillHeight}
    >
      <VerticalCylinderCircles
        circleCount={circleCount}
        thresholdArray={thresholdArray}
        itemColor={item.color}
      />
      {/* 맨 아래쪽 그라데이션 원 - 항상 표시 */}
      <VerticalValueDisplay>{item.value}</VerticalValueDisplay>
    </VerticalCylinderFill>
  );
};

export default VerticalCylinderContent;
