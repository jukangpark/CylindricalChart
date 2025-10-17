import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { CylinderCircleContainerProps } from "./types.ts";
import {
  ANIMATION_DELAY,
  ANIMATION_DURATION,
  CIRCLE_ANIMATION_DURATION,
} from "./constants.ts";
import { createGroups } from "./utils.ts";
import {
  containerStyle,
  labelContainerStyle,
  circlesContainerStyle,
  createLabelStyle,
  labelTextStyle,
  createCircleGroupStyle,
} from "./containerStyles.ts";

const CylinderCircleContainer = ({
  children,
  thresholdArray,
}: CylinderCircleContainerProps) => {
  const childrenArray = React.Children.toArray(children);

  // 분리된 유틸리티 함수 사용
  const groups = useMemo(
    () => createGroups(childrenArray, thresholdArray),
    [childrenArray, thresholdArray]
  );

  // 분리된 스타일 사용

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
          style={createLabelStyle(group.heightRatio, index === 0)}
        >
          <div style={labelTextStyle}>{group.label}</div>
        </motion.div>
      ))}
    </div>
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
          style={createCircleGroupStyle(group.heightRatio, group.color)}
        >
          {group.children}
        </motion.div>
      ))}
    </div>
  );

  return (
    <div style={containerStyle}>
      {renderLabelSection()}
      {renderCirclesSection()}
    </div>
  );
};

export default CylinderCircleContainer;
