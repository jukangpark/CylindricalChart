import React from "react";
import {
  ChartsContainer,
  ChartItem,
  CylinderContainer,
  Cylinder,
  ChartLabel,
} from "./horizontalCylindricalStyle";
import DotsFlow from "../DotsFlow";
import CylinderContent from "../CylinderContent";

const MAX_DOTS = 50;
const MAX_CIRCLE_COUNT = 50;
const MAX_FILL_WIDTH = 90;

const HorizontalCylinderChart = ({ data, maxValue = 1000, thresholdArray }) => {
  return (
    <ChartsContainer>
      {data.map((item, index) => {
        // 실린더 채워지는 너비 (최대 90%로 제한)
        const fillWidth = Math.min(
          (item.value / maxValue) * MAX_FILL_WIDTH,
          MAX_FILL_WIDTH
        );

        // 가로로 배치된 원의 개수
        const circleCount = Math.max(
          Math.floor((item.value / maxValue) * MAX_CIRCLE_COUNT),
          1
        );

        // 왼쪽에서 오른쪽으로 흐르는 점 개수
        const totalDots = Math.min(item.value, MAX_DOTS);

        return (
          <ChartItem key={index}>
            <CylinderContainer>
              <Cylinder>
                <DotsFlow totalDots={totalDots} position="left" />
                <CylinderContent
                  item={item}
                  fillWidth={fillWidth}
                  circleCount={circleCount}
                  thresholdArray={thresholdArray}
                  maxValue={maxValue}
                />
                <DotsFlow totalDots={totalDots} position="right" />
              </Cylinder>
            </CylinderContainer>
            <ChartLabel>{item.label}</ChartLabel>
          </ChartItem>
        );
      })}
    </ChartsContainer>
  );
};

export default HorizontalCylinderChart;
