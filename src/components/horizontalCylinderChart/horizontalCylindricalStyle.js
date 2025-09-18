import styled, { keyframes } from "styled-components";

// 애니메이션 정의
const fallAnimation = keyframes`
 0% {
    transform: translateX(-20px);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Styled Components
export const ChartsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 40px;
  background-color: white;
  min-height: 400px;
`;

export const ChartItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
  max-width: 600px;
`;

export const CylinderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  justify-content: center;
  position: relative;
  width: 100%;
`;

export const DotsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  position: absolute;
  z-index: 1;

  &.left-dots {
    left: 10px;
  }

  &.right-dots {
    right: 10px;
  }
`;

export const Dot = styled.div`
  width: 73px;
  height: 7px;
  opacity: ${(props) => props.opacity};
  animation: ${fallAnimation} 0.6s ease-out ${(props) => props.delay}s infinite;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const Cylinder = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const CylinderCircle = styled.div`
  width: 27px;
  height: 60px;
  margin-right: -10px;
  opacity: 1;
  transform: scaleX(0.8);
  position: relative;
  z-index: 2;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const LeftGradientCircle = styled.div`
  width: 27px;
  height: 60px;
  margin-right: -10px;
  opacity: 1;
  transform: scaleX(0.8);
  position: relative;
  z-index: 1;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const EntranceGroup = styled.div`
  position: relative;
  width: 50px; /* 전체 그룹의 너비 */
  height: 70px;
  opacity: 1;
  transform: scaleX(0.8);
  z-index: 1;

  svg {
    position: absolute;
    top: 0;
    height: 100%;
  }

  svg:nth-child(1) {
    left: 5px;
    width: 65px;
    z-index: 3;
  }

  svg:nth-child(2) {
    left: 60px; /* 첫 번째 SVG와 겹치게 */
    width: 19px;
    z-index: 2;
  }

  svg:nth-child(3) {
    left: 60px; /* 두 번째 SVG와 겹치게 */
    width: 19px;
    z-index: 1;
  }

  /* SVG 내부 g 요소들 애니메이션 */
  /* g {
    animation: floatAnimation 1s ease-in-out infinite;
  }

  g:nth-child(odd) {
    animation-delay: 0s;
  }

  g:nth-child(even) {
    animation-delay: 1.5s;
  }

  g:nth-child(3n) {
    animation-delay: 0.5s;
  }

  g:nth-child(4n) {
    animation-delay: 2s;
  }

  g:nth-child(5n) {
    animation-delay: 1s;
  }

  @keyframes floatAnimation {
    0%,
    100% {
      transform: translateX(0px) scale(1);
    }
    25% {
      transform: translateX(-3px) scale(1.05);
    }
    50% {
      transform: translateX(-5px) scale(1.1);
    }
    75% {
      transform: translateX(-2px) scale(1.02);
    }
  } */
`;

export const CylinderFill = styled.div`
  height: 100%;
  background-color: transparent;
  border-radius: 40px;
  position: relative;
  transition: width 0.5s ease;
  width: ${(props) => props.fillWidth}%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) =>
    props.fillWidthValue === 0 ? "center" : "center"};
  align-items: center;
  margin: 0 auto;
  z-index: 2;
`;

export const ValueDisplay = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: var(--text-standard-default, #1d1f20);
  text-align: center;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 150% */
  z-index: 3;
`;

export const ChartLabel = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  text-align: center;
  margin-top: 10px;
  width: 100%;
`;
