import React from "react";
import getDotStyle from "../func/getDotStyle";
import {
  DotsContainer,
  Dot,
} from "../components/horizontalCylinderChart/horizontalCylindricalStyle.js";
import DotSVG from "../components/DotSVG.tsx";

const DotsFlow = ({ totalDots, position = "left" }) => {
  if (totalDots <= 0) return null;

  const isLeft = position === "left";
  const delayOffset = isLeft ? 0 : 0.4;

  return (
    <DotsContainer className={`${position}-dots`}>
      {[...Array(totalDots)].map((_, i) => {
        const { color, opacity } = getDotStyle(i, totalDots);
        const delay = isLeft
          ? i * 0.1
          : (totalDots - 1 - i) * 0.1 + delayOffset;

        return (
          <Dot key={i} color={color} opacity={opacity} delay={delay}>
            <DotSVG color={color} />
          </Dot>
        );
      })}
    </DotsContainer>
  );
};

export default DotsFlow;
