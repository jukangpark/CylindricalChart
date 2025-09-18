import React from "react";

const DotSVG = ({ color }: { color: string }) => {
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
        fill="url(#paint0_linear_9879_175978)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_9879_175978"
          x1="0.362061"
          y1="3.6416"
          x2="72.5903"
          y2="3.6416"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.206731" stopColor="#87C2ED" stopOpacity="0" />
          <stop offset="1" stopColor="#87C2ED" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default DotSVG;
