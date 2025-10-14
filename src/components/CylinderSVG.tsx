import React from "react";

const CylinderSVG = ({ color = "#797F81" }: { color?: string }) => {
  return (
    <div
      style={{
        width: "27px",
        height: "60px",
        backgroundColor: color,
        borderRadius: "50%",
        opacity: 0.8,
        mixBlendMode: "color-burn",
        willChange: "transform", // GPU 가속 활성화
      }}
    />
  );
};

export default CylinderSVG;
