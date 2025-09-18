import React from "react";
import {
  CylinderFill,
  ValueDisplay,
} from "../components/horizontalCylinderChart/horizontalCylindricalStyle.js";
import EntranceCylinderCircle from "./entrance/EntranceCylinderCircle.tsx";
import CylinderCircles from "./CylinderCircles.jsx";
import ExitCylinderCircle from "./exit/ExitCylinderCircle.tsx";

const CylinderContent = ({
  item,
  fillWidth,
  circleCount,
  thresholdArray,
  maxValue,
}) => {
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
        <EntranceCylinderCircle />
        <CylinderCircles
          circleCount={circleCount}
          thresholdArray={thresholdArray}
          maxValue={maxValue}
          itemColor={item.color}
        />
      </div>
      {/* 맨 오른쪽 그라데이션 원 - 항상 표시 */}
      <ExitCylinderCircle />
      <ValueDisplay>{item.value}</ValueDisplay>
    </CylinderFill>
  );
};

export default CylinderContent;
