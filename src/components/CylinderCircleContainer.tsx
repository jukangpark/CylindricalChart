import React from "react";

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
          clonedChild.props.children.type?.name === "CylinderSVG"
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
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: `${group.color}50`,
              width: `${group.widthRatio * 100}%`, // 임계치 비율에 따른 너비
            }}
          >
            {group.children}
          </div>
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
          <div
            key={index}
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
            <div
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CylinderCircleContainer;
