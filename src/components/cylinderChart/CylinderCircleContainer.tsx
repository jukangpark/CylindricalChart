import React from "react";
import { motion } from "framer-motion";

interface Group {
  children: any[];
  label: string;
  color: string;
  heightRatio: number;
}

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
  const groups: Group[] = [];
  let totalRatio = 0;

  // 먼저 모든 그룹의 비율을 계산
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

    if (groupChildren.length > 0) {
      // 각 그룹의 높이 비율 계산 (10단위 기반)
      const heightRatio = (endValue - startValue) / (childrenArray.length * 10);
      totalRatio += heightRatio;

      // children에 색상 적용
      const coloredChildren = groupChildren.map((child, childIndex) => {
        const clonedChild = React.cloneElement(child as any, {
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
        children: coloredChildren as any[],
        label: threshold.label,
        color: threshold.color,
        heightRatio: heightRatio, // 높이 비율 추가
      });
    }
  }

  // 비율을 정규화 (총합이 100%가 되도록)
  if (totalRatio > 0) {
    groups.forEach((group) => {
      group.heightRatio = group.heightRatio / totalRatio;
    });
  }

  // 동적으로 생성된 그룹들로 렌더링
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        height: "100%",
      }}
    >
      {/* 라벨 컨테이너 */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          marginRight: "10px",
        }}
      >
        {groups.map((group, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.2 + 0.3, // 원들 애니메이션 후에 라벨 애니메이션
              ease: "easeOut",
            }}
            style={{
              height: `${group.heightRatio * 100}%`, // 임계치 비율에 따른 높이
              textAlign: "center",
              fontSize: "12px",
              fontWeight: "600",
              color: "#333",
              width: "1px",
              borderLeft: "1px solid #5C6061",
              borderTop: index === 0 ? "1px solid #5C6061" : "none", // 첫 번째만 위쪽 border
              borderBottom: "1px solid #5C6061", // 모든 요소에 아래쪽 border
              paddingRight: "5px",
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
                right: "15px",
                top: "50%",
                transform: "translate(50%, -50%)",
                fontWeight: "400",
                color: "#5C6061",
                whiteSpace: "nowrap",
                fontSize: "11px",
              }}
            >
              {group.label}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* 원들 컨테이너 */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
        }}
      >
        {groups.map((group, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              scaleX: [1, 1.1, 1], // 가로로 늘어났다 줄어들었다
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.2, // 각 그룹마다 0.2초씩 지연
              ease: "easeOut",
            }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: `${group.color}50`,
              height: `${group.heightRatio * 100}%`, // 임계치 비율에 따른 높이
              maxWidth: "73.6px",
              width: "100%",
              overflow: "hidden",
            }}
          >
            {group.children}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CylinderCircleContainer;
