import React from "react";
import { SpeedCylinderFill, SpeedValueDisplay } from "./speedChartStyle.js";
import SpeedEntranceCylinderCircle from "../entrance/SpeedEntranceCylinderCircle.tsx";
import SpeedCircles from "./SpeedCircles.tsx";
import SpeedExitCylinderCircle from "../exit/SpeedExitCylinderCircle.tsx";

const SpeedChartContent = ({
  item,
  fillWidth,
  circleCount,
  thresholdArray,
}) => {
  return (
    <SpeedCylinderFill
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
        <SpeedEntranceCylinderCircle />
        <SpeedCircles
          circleCount={circleCount}
          thresholdArray={thresholdArray}
          itemColor={item.color}
        />
        <SpeedExitCylinderCircle />
      </div>
      {/* 맨 오른쪽 그라데이션 원 - 항상 표시 */}

      <SpeedValueDisplay>{item.value}</SpeedValueDisplay>
    </SpeedCylinderFill>
  );
};

export default SpeedChartContent;
