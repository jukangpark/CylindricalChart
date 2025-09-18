import React from "react";

const DotSVG = ({ color }: { color: string }) => {
  // 고유한 gradient ID 생성 (여러 DotSVG가 동시에 렌더링될 때 충돌 방지)
  const gradientId = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="73"
      height="7"
      viewBox="0 0 73 7"
      fill="none"
    >
      <rect
        opacity="0.4"
        x="0.362061"
        y="2.1416"
        width="72.2282"
        height="3"
        fill={`url(#${gradientId})`}
      />
      <defs>
        <linearGradient
          id={gradientId}
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
    </svg>
  );
};

export default DotSVG;
