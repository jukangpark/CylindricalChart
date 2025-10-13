import React from "react";
import getDotStyle from "../func/getDotStyle";
import {
  VerticalDotsContainer,
  VerticalDot,
} from "../components/verticalCylinderChart/verticalCylindricalStyle.js";
import VerticalDotSVG from "../components/VerticalDotSVG.tsx";

const VerticalDotsFlow = ({ totalDots, position, thresholdArray = [] }) => {
  if (totalDots <= 0) return null;

  const isBottom = position === "bottom";
  const delayOffset = isBottom ? 0 : 0.4;

  return (
    <VerticalDotsContainer className={`${position}-dots`}>
      {[...Array(totalDots)].map((_, i) => {
        const { color, opacity } = getDotStyle(i, totalDots);
        const delay = isBottom
          ? i * 0.1
          : (totalDots - 1 - i) * 0.1 + delayOffset;

        // 랜덤 marginLeft (음수~양수, -20px ~ +20px 범위)
        const randomMarginLeft = (Math.random() - 0.5) * 40;

        // position="bottom"인 경우에만 thresholdArray에서 랜덤 색상 선택
        let dotColor = color;
        if (!isBottom && thresholdArray.length > 0) {
          const randomIndex = Math.floor(Math.random() * thresholdArray.length);
          dotColor = thresholdArray[randomIndex].color;
        }

        return (
          <VerticalDot
            key={i}
            color={dotColor}
            opacity={opacity}
            delay={delay}
            randomMarginLeft={randomMarginLeft}
          >
            <VerticalDotSVG color={dotColor} />
          </VerticalDot>
        );
      })}
    </VerticalDotsContainer>
  );
};

export default VerticalDotsFlow;
