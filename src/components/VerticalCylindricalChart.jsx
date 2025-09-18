import React from "react";
import getDotStyle from "../func/getDotStyle";
import {
  ChartsContainer,
  ChartItem,
  CylinderContainer,
  DotsContainer,
  Dot,
  VerticalCylinder,
  CylinderFill,
  CylinderCircle,
  ValueDisplay,
  ChartLabel,
} from "./verticalCylindricalStyle";

const MAX_DOTS = 50;
const MAX_CIRCLE_COUNT = 25;
const MAX_FILL_HEIGHT = 90;

const VerticalCylindricalChart = ({ data, maxValue = 1000, threshold = 0 }) => {
  // 점들의 색상과 투명도 계산 함수

  return (
    <ChartsContainer>
      {data.map((item, index) => {
        // 실린더 채워지는 높이 (최대 90%로 제한)
        const fillHeight = Math.min(
          (item.value / maxValue) * MAX_FILL_HEIGHT,
          MAX_FILL_HEIGHT
        );

        // 가운데의 포개진 원의 개수
        const circleCount = Math.max(
          Math.floor((item.value / maxValue) * MAX_CIRCLE_COUNT)
        );

        // threshold에 해당하는 원의 인덱스 계산
        const thresholdCircleIndex = Math.floor(
          (threshold / maxValue) * MAX_CIRCLE_COUNT
        );

        // 떨어지는 원 개수 (최대 50개로 제한)
        const totalDots = Math.min(item.value, MAX_DOTS);

        return (
          <ChartItem key={index}>
            <CylinderContainer>
              {/* 실린더 */}
              <VerticalCylinder>
                {/* 상단 점들 */}
                <DotsContainer className="top-dots">
                  {[...Array(totalDots)].map((_, i) => {
                    const { color, opacity } = getDotStyle(i, totalDots);
                    // threshold를 넘어가는 점들만 빨간색으로 변경
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

                <CylinderFill color={item.color} fillHeight={fillHeight}>
                  {/* 여러 개의 원들을 포개서 쌓기 */}
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

                {/* 하단 점들 */}
                <DotsContainer className="bottom-dots">
                  {[...Array(totalDots)].map((_, i) => {
                    const { color, opacity } = getDotStyle(i, totalDots);
                    // threshold를 넘어가는 점들만 빨간색으로 변경
                    return (
                      <Dot
                        key={i}
                        color={color}
                        opacity={opacity}
                        delay={(totalDots - 1 - i) * 0.1 + 0.4} // 하단은 위에서부터 시작하므로 순서 반전
                      />
                    );
                  })}
                </DotsContainer>
              </VerticalCylinder>
            </CylinderContainer>

            {/* 라벨 */}
            <ChartLabel>{item.label}</ChartLabel>
          </ChartItem>
        );
      })}
    </ChartsContainer>
  );
};

export default VerticalCylindricalChart;
