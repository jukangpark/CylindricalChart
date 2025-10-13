import React from "react";
import {
  CylinderFill,
  ValueDisplay,
} from "../components/horizontalCylinderChart/horizontalCylindricalStyle.js";
import HorizontalEntranceCylinderCircle from "./entrance/HorizontalEntranceCylinderCircle.tsx";
import CylinderCircles from "./CylinderCircles.jsx";
import HorizontalExitCylinderCircle from "./exit/HorizontalExitCylinderCircle.tsx";

const CylinderContent = ({ item, fillWidth, circleCount, thresholdArray }) => {
  return (
    <CylinderFill
      color={item.color}
      fillWidth={fillWidth}
      fillWidthValue={fillWidth}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <HorizontalEntranceCylinderCircle />
        <CylinderCircles
          circleCount={circleCount}
          thresholdArray={thresholdArray}
          itemColor={item.color}
        />
        <HorizontalExitCylinderCircle />
      </div>
      {/* 맨 오른쪽 그라데이션 원 - 항상 표시 */}

      <ValueDisplay>{item.value}</ValueDisplay>
    </CylinderFill>
  );
};

export default CylinderContent;
