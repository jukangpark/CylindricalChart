import React, { useMemo } from "react";
import getDotStyle from "../../func/getDotStyle.js";
import {
  CylinderDotsContainer,
  StyledCylinderDot,
} from "./cylinderChartStyle.js";
import CylinderDot from "./CylinderDot.tsx";

const CylinderDotsFlow = ({ totalDots, position, thresholdArray = [] }) => {
  // totalDots가 유효하지 않은 경우 처리
  const validTotalDots = Math.max(0, Math.floor(Number(totalDots) || 0));
  const isBottom = position === "bottom";
  const delayOffset = isBottom ? 0 : 0.4;

  // 랜덤 값들을 미리 계산하여 메모이제이션
  const dotConfigs = useMemo(() => {
    if (validTotalDots <= 0) return [];

    return [...Array(validTotalDots)].map((_, i) => {
      const { color, opacity } = getDotStyle(i, validTotalDots);
      const delay = isBottom
        ? i * 0.1
        : (validTotalDots - 1 - i) * 0.1 + delayOffset;

      // 랜덤 marginLeft (음수~양수, -20px ~ +20px 범위)
      const randomMarginLeft = (Math.random() - 0.5) * 40;

      // position="bottom"인 경우에만 thresholdArray에서 랜덤 색상 선택
      let dotColor = color;
      if (!isBottom && thresholdArray.length > 0) {
        const randomIndex = Math.floor(Math.random() * thresholdArray.length);
        dotColor = thresholdArray[randomIndex].color;
      }

      return {
        color: dotColor,
        opacity,
        delay,
        randomMarginLeft,
      };
    });
  }, [validTotalDots, isBottom, thresholdArray, delayOffset]);

  if (validTotalDots <= 0) return null;

  return (
    <CylinderDotsContainer className={`${position}-dots`}>
      {dotConfigs.map((config, i) => (
        <StyledCylinderDot
          key={i}
          color={config.color}
          opacity={config.opacity}
          delay={config.delay}
          randomMarginLeft={config.randomMarginLeft}
        >
          <CylinderDot color={config.color} />
        </StyledCylinderDot>
      ))}
    </CylinderDotsContainer>
  );
};

export default CylinderDotsFlow;
