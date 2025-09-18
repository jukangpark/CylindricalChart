import React from "react";

const CylinderCircleContainer = ({
  children,
  thresholdArray,
  maxValue = 1000,
}: {
  children: any;
  thresholdArray: Array<{ value: number; label: string; color: string }>;
  maxValue?: number;
}) => {
  console.log("thresholdArray", thresholdArray);

  // children을 배열로 변환
  const childrenArray = React.Children.toArray(children);

  // 임계치별로 children을 그룹화
  const groups = [];
  let currentIndex = 0;

  for (let i = 0; i < thresholdArray.length; i++) {
    const threshold = thresholdArray[i];
    const nextThreshold = thresholdArray[i + 1];

    // 현재 임계치 범위에 해당하는 원의 개수 계산
    const startRatio = i === 0 ? 0 : thresholdArray[i - 1].value / maxValue;
    const endRatio = nextThreshold ? nextThreshold.value / maxValue : 1;

    const startIndex = Math.floor(startRatio * childrenArray.length);
    const endIndex = Math.floor(endRatio * childrenArray.length);

    const groupChildren = childrenArray.slice(startIndex, endIndex);

    if (groupChildren.length > 0) {
      groups.push({
        children: groupChildren,
        label: threshold.label,
        color: threshold.color,
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
              flex: 1,
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
