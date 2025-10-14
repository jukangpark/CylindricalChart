import React from "react";

// 공통 gradient ID - 한 번만 정의하여 재사용
const COMMON_GRADIENT_ID = "dot-gradient";

const DotSVG = React.memo(({ color = "#87C2ED" }: { color?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="73"
      height="7"
      viewBox="0 0 73 7"
      fill="none"
    >
      <defs>
        <linearGradient
          id={COMMON_GRADIENT_ID}
          x1="0.362061"
          y1="3.6416"
          x2="72.5903"
          y2="3.6416"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.206731" stopColor={color} stopOpacity="0" />
          <stop offset="1" stopColor={color} />
        </linearGradient>
      </defs>
      <rect
        opacity="0.4"
        x="0.362061"
        y="2.1416"
        width="72.2282"
        height="3"
        fill={`url(#${COMMON_GRADIENT_ID})`}
      />
    </svg>
  );
});

export default DotSVG;
