import React from "react";
import getDotStyle from "../../func/getDotStyle.js";
import { SpeedDotsContainer, StyledSpeedDot } from "./speedChartStyle.js";
import SpeedDot from "./SpeedDot.tsx";

const SpeedDotsFlow = ({ totalDots, position, thresholdArray = [] }) => {
  // totalDots 유효성 검사 및 제한
  const safeTotalDots = Math.max(0, Math.min(Math.floor(totalDots) || 0, 50));

  if (safeTotalDots <= 0) return null;

  const isRight = position === "right";
  const delayOffset = isRight ? 0 : 0.4;

  return (
    <SpeedDotsContainer className={`${position}-dots`}>
      {[...Array(safeTotalDots)].map((_, i) => {
        const { color, opacity } = getDotStyle(i, safeTotalDots);
        const delay = isRight
          ? i * 0.1
          : (safeTotalDots - 1 - i) * 0.1 + delayOffset;

        // 랜덤 marginTop (음수~양수, -20px ~ +20px 범위)
        const randomMarginTop = (Math.random() - 0.5) * 40;

        // position="right"인 경우에만 thresholdArray에서 랜덤 색상 선택
        let dotColor = color;
        if (!isRight && thresholdArray.length > 0) {
          const randomIndex = Math.floor(Math.random() * thresholdArray.length);
          dotColor = thresholdArray[randomIndex].color;
        }

        return (
          <StyledSpeedDot
            key={i}
            color={color}
            opacity={opacity}
            delay={delay}
            randomMarginTop={randomMarginTop}
          >
            <SpeedDot color={dotColor} />
          </StyledSpeedDot>
        );
      })}
    </SpeedDotsContainer>
  );
};

export default SpeedDotsFlow;
