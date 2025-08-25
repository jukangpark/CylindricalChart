import React from "react";
import getDotStyle from "../func/getDotStyle";
import {
  ChartsContainer,
  ChartItem,
  CylinderContainer,
  DotsContainer,
  Dot,
  Cylinder,
  CylinderFill,
  CylinderCircle,
  ValueDisplay,
  ChartLabel,
} from "./horizontalCylindricalStyle";

const MAX_DOTS = 50;
const MAX_CIRCLE_COUNT = 25;
const MAX_FILL_WIDTH = 90;

const HorizontalCylinderChart = ({ data, maxValue = 1000, threshold = 0 }) => {
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

        // threshold에 해당하는 원의 인덱스 계산
        const thresholdCircleIndex = Math.floor(
          (threshold / maxValue) * MAX_CIRCLE_COUNT
        );

        // 왼쪽에서 오른쪽으로 흐르는 점 개수
        const totalDots = Math.min(item.value, MAX_DOTS);

        return (
          <ChartItem key={index}>
            <CylinderContainer>
              {/* 실린더 */}
              <Cylinder>
                {/* 왼쪽 점들 */}
                {totalDots > 0 && (
                  <DotsContainer className="left-dots">
                    {[...Array(totalDots)].map((_, i) => {
                      const { color, opacity } = getDotStyle(i, totalDots);
                      return (
                        <Dot
                          key={i}
                          color={color}
                          opacity={opacity}
                          delay={i * 0.1}
                        />
                      );
                    })}
                  </DotsContainer>
                )}

                <CylinderFill
                  color={item.color}
                  fillWidth={fillWidth}
                  fillWidthValue={fillWidth}
                >
                  {/* 가로로 배치된 원들 */}
                  {[...Array(circleCount)].map((_, circleIndex) => {
                    // threshold를 넘어가는 원들만 빨간색으로 변경
                    const circleColor =
                      circleIndex >= thresholdCircleIndex
                        ? "#ff0000"
                        : item.color;
                    return (
                      <CylinderCircle
                        key={circleIndex}
                        color={circleColor}
                        delay={circleIndex}
                      />
                    );
                  })}
                  <ValueDisplay>{item.value}</ValueDisplay>
                </CylinderFill>

                {/* 오른쪽 점들 */}
                {totalDots > 0 && (
                  <DotsContainer className="right-dots">
                    {[...Array(totalDots)].map((_, i) => {
                      const { color, opacity } = getDotStyle(i, totalDots);
                      return (
                        <Dot
                          key={i}
                          color={color}
                          opacity={opacity}
                          delay={(totalDots - 1 - i) * 0.1 + 0.4}
                        />
                      );
                    })}
                  </DotsContainer>
                )}
              </Cylinder>
            </CylinderContainer>

            {/* 라벨 - 실린더 아래에 배치 */}
            <ChartLabel>{item.label}</ChartLabel>
          </ChartItem>
        );
      })}
    </ChartsContainer>
  );
};

export default HorizontalCylinderChart;
