import React from "react";
import { motion } from "framer-motion";

const CylinderCircleContainer = ({
  children,
  thresholdArray,
}: {
  children: any;
  thresholdArray: Array<{ value: number; label: string; color: string }>;
}) => {
  // children을 배열로 변환
  const childrenArray = React.Children.toArray(children);

  // 임계치별로 children을 그룹화
  const groups = [];

  for (let i = 0; i < thresholdArray.length; i++) {
    const threshold = thresholdArray[i];
    const nextThreshold = thresholdArray[i + 1];

    // 현재 임계치 범위에 해당하는 원의 개수 계산 (10단위 기반)
    const startValue = i === 0 ? 0 : thresholdArray[i - 1].value;
    const endValue = nextThreshold
      ? nextThreshold.value
      : childrenArray.length * 10;

    const startIndex = Math.floor(startValue / 10);
    const endIndex = Math.floor(endValue / 10);

    const groupChildren = childrenArray.slice(startIndex, endIndex);

    // 각 그룹의 너비 비율 계산 (10단위 기반)
    const widthRatio = (endValue - startValue) / (childrenArray.length * 10);

    if (groupChildren.length > 0) {
      // children에 색상 적용
      const coloredChildren = groupChildren.map((child, childIndex) => {
        const clonedChild = React.cloneElement(child as React.ReactElement, {
          ...child.props,
          color: threshold.color, // 그룹의 색상으로 강제 설정
        });

        // CylinderSVG에도 색상 전달
        if (
          clonedChild.props.children &&
          React.isValidElement(clonedChild.props.children)
        ) {
          const svgChild = React.cloneElement(clonedChild.props.children, {
            ...clonedChild.props.children.props,
            color: threshold.color,
          });

          return React.cloneElement(clonedChild, {
            ...clonedChild.props,
            children: svgChild,
          });
        }

        return clonedChild;
      });

      groups.push({
        children: coloredChildren,
        label: threshold.label,
        color: threshold.color,
        widthRatio: widthRatio, // 너비 비율 추가
      });
    }
  }

  // 동적으로 생성된 그룹들로 렌더링
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* 원들 컨테이너 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {groups.map((group, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
              scaleY: [1, 1.1, 1], // 세로로 늘어났다 줄어들었다
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.2, // 각 그룹마다 0.2초씩 지연
              ease: "easeOut",
            }}
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: `${group.color}50`,
              width: `${group.widthRatio * 100}%`, // 임계치 비율에 따른 너비
              maxHeight: "73.6px",
            }}
          >
            {group.children}
          </motion.div>
        ))}
      </div>

      {/* 라벨 컨테이너 */}
      <div
        style={{
          display: "flex",
          width: "100%",
          marginTop: "10px",
        }}
      >
        {groups.map((group, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.2 + 0.3, // 원들 애니메이션 후에 라벨 애니메이션
              ease: "easeOut",
            }}
            style={{
              width: `${group.widthRatio * 100}%`, // 임계치 비율에 따른 너비
              textAlign: "center",
              fontSize: "12px",
              fontWeight: "600",
              color: "#333",
              height: "1px",
              borderBottom: "1px solid #5C6061",
              borderLeft: index === 0 ? "1px solid #5C6061" : "none", // 첫 번째만 왼쪽 border
              borderRight: "1px solid #5C6061", // 모든 요소에 오른쪽 border
              paddingTop: "5px",
              position: "relative",
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: index * 0.2 + 0.5, // 라벨 텍스트는 더 늦게 나타남
                ease: "easeOut",
              }}
              style={{
                position: "absolute",
                top: "15px",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontWeight: "400",
                color: "#5C6061",
              }}
            >
              {group.label}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CylinderCircleContainer;
