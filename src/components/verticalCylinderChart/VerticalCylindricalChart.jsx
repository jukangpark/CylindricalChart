import React from "react";
import {
  VerticalChartsContainer,
  StyledVerticalChartItem,
  StyledVerticalStyledCylinderContainer,
  VerticalStyledCylinder,
  VerticalChartLabel,
} from "./verticalCylindricalStyle";
import VerticalDotsFlow from "../VerticalDotsFlow";
import VerticalCylinderContent from "../VerticalCylinderContent";
import VerticalEntranceCylinderCircle from "../entrance/VerticalEntranceCylinderCircle.tsx";
import VerticalExitCylinderCircle from "../exit/VerticalExitCylinderCircle.tsx";

const MAX_DOTS = 50;

const VerticalCylindricalChart = ({ data, thresholdArray }) => {
  return (
    <VerticalChartsContainer>
      {data.map((item, index) => {
        // 실린더 채워지는 높이 (10으로 나누어서 계산)
        const fillHeight = item.value / 10;

        // 세로로 배치된 원의 개수 (10으로 나누어서 계산)
        const circleCount = Math.max(Math.floor(item.value / 10), 1);

        // 위에서 아래로 흐르는 점 개수
        const totalDots = Math.min(item.value, MAX_DOTS);

        return (
          <StyledVerticalChartItem key={index}>
            <StyledVerticalStyledCylinderContainer>
              <VerticalStyledCylinder>
                <VerticalDotsFlow
                  totalDots={totalDots}
                  position="top"
                  thresholdArray={thresholdArray}
                />
                <VerticalEntranceCylinderCircle />
                <VerticalCylinderContent
                  item={item}
                  fillHeight={fillHeight}
                  circleCount={circleCount}
                  thresholdArray={thresholdArray}
                />
                <VerticalExitCylinderCircle />
                <VerticalDotsFlow
                  totalDots={totalDots}
                  position="bottom"
                  thresholdArray={thresholdArray}
                />
              </VerticalStyledCylinder>
            </StyledVerticalStyledCylinderContainer>
            <VerticalChartLabel>{item.label}</VerticalChartLabel>
          </StyledVerticalChartItem>
        );
      })}
    </VerticalChartsContainer>
  );
};

export default VerticalCylindricalChart;
