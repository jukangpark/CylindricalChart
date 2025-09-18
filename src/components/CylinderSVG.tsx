import React from "react";

const CylinderSVG = ({ color = "#797F81" }: { color?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="60"
      viewBox="0 0 27 60"
      fill="none"
    >
      <g style={{ mixBlendMode: "color-burn" }} opacity="0.8">
        <ellipse
          cx="13.1861"
          cy="29.9489"
          rx="13.1392"
          ry="29.2155"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default CylinderSVG;
