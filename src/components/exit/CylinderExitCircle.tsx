import React from "react";

const CylinderExitCircle = () => {
  return (
    <svg
      width="58.43"
      height="33"
      viewBox="0 0 95 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginRight: "-15px", marginTop: "-17px", zIndex: 1 }}
    >
      <g filter="url(#filter0_d_10108_203764)">
        <ellipse
          cx="48.2695"
          cy="16.393"
          rx="11.8428"
          ry="46.5"
          transform="rotate(90 48.2695 16.393)"
          fill="white"
        />
      </g>
      <path
        d="M94.5195 14.0786C94.5195 15.5731 93.3249 17.066 90.9863 18.4741C88.6632 19.873 85.2845 21.1416 81.0879 22.2104C72.6985 24.347 61.0954 25.6714 48.2695 25.6714C35.4437 25.6714 23.8406 24.347 15.4512 22.2104C11.2546 21.1416 7.87589 19.873 5.55273 18.4741C3.21414 17.066 2.01954 15.5731 2.01953 14.0786C2.01953 12.5842 3.21413 11.0913 5.55273 9.68311C7.8759 8.28424 11.2546 7.01558 15.4512 5.94678C23.8406 3.81019 35.4437 2.48584 48.2695 2.48584C61.0954 2.48584 72.6985 3.81019 81.0879 5.94678C85.2845 7.01558 88.6632 8.28424 90.9863 9.68311C93.3249 11.0913 94.5195 12.5842 94.5195 14.0786Z"
        fill="url(#paint0_radial_10108_203764)"
        stroke="white"
        stroke-width="0.5"
      />
      <defs>
        <filter
          id="filter0_d_10108_203764"
          x="0.769531"
          y="0.550293"
          width="101"
          height="31.6855"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="3" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.85 0"
          />
          <feBlend
            mode="hard-light"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_10108_203764"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_10108_203764"
            result="shape"
          />
        </filter>
        <radialGradient
          id="paint0_radial_10108_203764"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(48.2695 14.0786) rotate(180) scale(46.5 11.8428)"
        >
          <stop offset="0.509615" stop-color="white" stop-opacity="0" />
          <stop offset="0.865385" stop-color="#D8D8D8" />
          <stop offset="1" stop-color="white" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default CylinderExitCircle;
