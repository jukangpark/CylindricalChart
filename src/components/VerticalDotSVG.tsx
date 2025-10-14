import React from "react";

// 공통 gradient ID - 한 번만 정의하여 재사용
const VERTICAL_GRADIENT_ID = "vertical-dot-gradient";

const VerticalDotSVG = React.memo(
  ({ color = "#87C2ED" }: { color?: string }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="7"
        height="73"
        viewBox="0 0 7 73"
        fill="none"
      >
        <defs>
          <linearGradient
            id={VERTICAL_GRADIENT_ID}
            x1="3.6416"
            y1="0.362061"
            x2="3.6416"
            y2="72.5903"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.206731" stopColor={color} stopOpacity="0" />
            <stop offset="1" stopColor={color} />
          </linearGradient>
        </defs>
        <rect
          opacity="0.4"
          x="2.1416"
          y="0.362061"
          width="3"
          height="72.2282"
          fill={`url(#${VERTICAL_GRADIENT_ID})`}
        />
      </svg>
    );
  }
);

export default VerticalDotSVG;
