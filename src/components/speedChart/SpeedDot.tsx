import React from "react";

const SpeedDot = React.memo(({ color = "#87C2ED" }: { color?: string }) => {
  return (
    <div
      style={{
        width: "73px",
        height: "7px",
        background: `linear-gradient(90deg, transparent 20%, ${color} 100%)`,
        opacity: 0.4,
        borderRadius: "3px",
        willChange: "transform", // GPU 가속 활성화
      }}
    />
  );
});

export default SpeedDot;
