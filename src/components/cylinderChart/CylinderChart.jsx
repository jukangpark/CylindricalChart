import React from "react";
import {
  CylinderChartsContainer,
  StyledCylinderChartItem,
  StyledCylinderContainer,
  StyledCylinder,
  CylinderChartLabel,
} from "./cylinderChartStyle";
import CylinderDotsFlow from "./CylinderDotsFlow.jsx";
import CylinderContent from "./CylinderContent.jsx";
import CylinderEntranceCircle from "../entrance/CylinderEntranceCircle.tsx";
import CylinderExitCircle from "../exit/CylinderExitCircle.tsx";

const MAX_DOTS = 50;

const CylinderChart = ({ data, thresholdArray }) => {
  return (
    <CylinderChartsContainer>
      {data.map((item, index) => {
        // 실린더 채워지는 높이 (10으로 나누어서 계산)
        const fillHeight = item.value / 10;

        // 세로로 배치된 원의 개수 (10으로 나누어서 계산)
        const circleCount = Math.max(Math.floor(item.value / 10), 1);

        // 위에서 아래로 흐르는 점 개수 (안전한 계산)
        const totalDots = Math.min(
          Math.max(0, Math.floor(item.value || 0)),
          MAX_DOTS
        );

        return (
          <StyledCylinderChartItem key={index}>
            <StyledCylinderContainer>
              <StyledCylinder>
                <CylinderDotsFlow
                  totalDots={totalDots}
                  position="top"
                  thresholdArray={thresholdArray}
                />
                <CylinderEntranceCircle />
                <CylinderContent
                  item={item}
                  fillHeight={fillHeight}
                  circleCount={circleCount}
                  thresholdArray={thresholdArray}
                />
                <CylinderExitCircle />
                <CylinderDotsFlow
                  totalDots={totalDots}
                  position="bottom"
                  thresholdArray={thresholdArray}
                />
              </StyledCylinder>
            </StyledCylinderContainer>
            <CylinderChartLabel>{item.label}</CylinderChartLabel>
          </StyledCylinderChartItem>
        );
      })}
    </CylinderChartsContainer>
  );
};

export default CylinderChart;
