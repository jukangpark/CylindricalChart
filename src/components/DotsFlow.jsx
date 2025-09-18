import React from "react";
import getDotStyle from "../func/getDotStyle";
import {
  DotsContainer,
  Dot,
} from "../components/horizontalCylinderChart/horizontalCylindricalStyle.js";
import DotSVG from "../components/DotSVG.tsx";

const DotsFlow = ({ totalDots, position, thresholdArray = [] }) => {
  if (totalDots <= 0) return null;

  const isRight = position === "right";
  const delayOffset = isRight ? 0 : 0.4;

  return (
    <DotsContainer className={`${position}-dots`}>
      {[...Array(totalDots)].map((_, i) => {
        const { color, opacity } = getDotStyle(i, totalDots);
        const delay = isRight
          ? i * 0.1
          : (totalDots - 1 - i) * 0.1 + delayOffset;

        // 랜덤 marginTop (음수~양수, -20px ~ +20px 범위)
        const randomMarginTop = (Math.random() - 0.5) * 40;

        // position="right"인 경우에만 thresholdArray에서 랜덤 색상 선택
        let dotColor = color;
        if (!isRight && thresholdArray.length > 0) {
          const randomIndex = Math.floor(Math.random() * thresholdArray.length);
          dotColor = thresholdArray[randomIndex].color;
        }

        return (
          <Dot
            key={i}
            color={color}
            opacity={opacity}
            delay={delay}
            randomMarginTop={randomMarginTop}
          >
            <DotSVG color={dotColor} />
          </Dot>
        );
      })}
    </DotsContainer>
  );
};

export default DotsFlow;
