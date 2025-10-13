import React from "react";

const VerticalDotSVG = ({ color = "#87C2ED" }: { color?: string }) => {
  // 고유한 gradient ID 생성 (여러 VerticalDotSVG가 동시에 렌더링될 때 충돌 방지)
  const gradientId = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="7"
      height="73"
      viewBox="0 0 7 73"
      fill="none"
    >
      <rect
        opacity="0.4"
        x="2.1416"
        y="0.362061"
        width="3"
        height="72.2282"
        fill={`url(#${gradientId})`}
      />
      <defs>
        <linearGradient
          id={gradientId}
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
    </svg>
  );
};

export default VerticalDotSVG;
