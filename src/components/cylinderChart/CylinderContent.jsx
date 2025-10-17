import React from "react";
import { CylinderFill, CylinderValueDisplay } from "./cylinderChartStyle.js";
import CylinderCircles from "./CylinderCircles.tsx";

const CylinderContent = ({ item, fillHeight, circleCount, thresholdArray }) => {
  return (
    <CylinderFill
      color={item.color}
      fillHeight={fillHeight}
      fillHeightValue={fillHeight}
    >
      <CylinderCircles
        circleCount={circleCount}
        thresholdArray={thresholdArray}
        itemColor={item.color}
      />
      {/* 맨 아래쪽 그라데이션 원 - 항상 표시 */}
      <CylinderValueDisplay>{item.value}</CylinderValueDisplay>
    </CylinderFill>
  );
};

export default CylinderContent;
