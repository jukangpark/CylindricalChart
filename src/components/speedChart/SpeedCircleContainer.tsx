import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { SpeedCircleContainerProps } from "./types.ts";
import {
  ANIMATION_DELAY,
  ANIMATION_DURATION,
  CIRCLE_ANIMATION_DURATION,
} from "./constants.ts";
import { createGroups } from "./utils.ts";
import {
  containerStyle,
  circlesContainerStyle,
  labelContainerStyle,
  createCircleGroupStyle,
  createLabelStyle,
  labelTextStyle,
} from "./containerStyles.ts";

const SpeedCircleContainer = ({
  children,
  thresholdArray,
}: SpeedCircleContainerProps) => {
  const childrenArray = React.Children.toArray(children);

  // 분리된 유틸리티 함수 사용
  const groups = useMemo(
    () => createGroups(childrenArray, thresholdArray),
    [childrenArray, thresholdArray]
  );

  // 원들 섹션 렌더링
  const renderCirclesSection = () => (
    <div style={circlesContainerStyle}>
      {groups.map((group, index) => (
        <motion.div
          key={`circle-${index}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: CIRCLE_ANIMATION_DURATION,
            delay: index * ANIMATION_DELAY,
            ease: "easeOut",
          }}
          style={createCircleGroupStyle(group.widthRatio, group.color)}
        >
          {group.children}
        </motion.div>
      ))}
    </div>
  );

  // 라벨 섹션 렌더링
  const renderLabelSection = () => (
    <div style={labelContainerStyle}>
      {groups.map((group, index) => (
        <motion.div
          key={`label-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: ANIMATION_DURATION,
            delay: index * ANIMATION_DELAY + 0.2,
            ease: "easeOut",
          }}
          style={createLabelStyle(group.widthRatio, index === 0)}
        >
          <div style={labelTextStyle}>{group.label}</div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div style={containerStyle}>
      {renderCirclesSection()}
      {renderLabelSection()}
    </div>
  );
};

export default SpeedCircleContainer;
