import React from "react";
import {
  SpeedChartsContainer,
  SpeedChartItem,
  StyledSpeedCylinderContainer,
  StyledSpeedCylinder,
  SpeedChartLabel,
} from "./speedChartStyle";
import SpeedDotsFlow from "./SpeedDotsFlow";
import SpeedChartContent from "./SpeedChartContent";

const MAX_DOTS = 50;

const SpeedChart = ({ data, thresholdArray }) => {
  return (
    <SpeedChartsContainer>
      {data.map((item, index) => {
        // 실린더 채워지는 너비 (10으로 나누어서 계산)
        const fillWidth = item.value / 10;

        // 가로로 배치된 원의 개수 (10으로 나누어서 계산)
        const circleCount = Math.max(Math.floor(item.value / 10), 1);

        // 왼쪽에서 오른쪽으로 흐르는 점 개수
        const totalDots = Math.min(item.value, MAX_DOTS);

        return (
          <SpeedChartItem key={index}>
            <StyledSpeedCylinderContainer>
              <StyledSpeedCylinder>
                <SpeedDotsFlow
                  totalDots={totalDots}
                  position="left"
                  thresholdArray={thresholdArray}
                />
                <SpeedChartContent
                  item={item}
                  fillWidth={fillWidth}
                  circleCount={circleCount}
                  thresholdArray={thresholdArray}
                />
                <SpeedDotsFlow
                  totalDots={totalDots}
                  position="right"
                  thresholdArray={thresholdArray}
                />
              </StyledSpeedCylinder>
            </StyledSpeedCylinderContainer>
            <SpeedChartLabel>{item.label}</SpeedChartLabel>
          </SpeedChartItem>
        );
      })}
    </SpeedChartsContainer>
  );
};

export default SpeedChart;
