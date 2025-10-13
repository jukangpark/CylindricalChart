import React from "react";

const VerticalCylinderSVG = ({ color = "#797F81" }: { color?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="27"
      viewBox="0 0 60 27"
      fill="none"
    >
      <g style={{ mixBlendMode: "color-burn" }} opacity="0.8">
        <ellipse
          cx="29.9489"
          cy="13.1861"
          rx="29.2155"
          ry="13.1392"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default VerticalCylinderSVG;
