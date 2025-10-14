import React from "react";

const CylinderDot = React.memo(({ color = "#87C2ED" }: { color?: string }) => {
  return (
    <div
      style={{
        width: "7px",
        height: "73px",
        background: `linear-gradient(180deg, transparent 20%, ${color} 100%)`,
        opacity: 0.4,
        borderRadius: "3px",
        willChange: "transform", // GPU 가속 활성화
      }}
    />
  );
});

export default CylinderDot;
