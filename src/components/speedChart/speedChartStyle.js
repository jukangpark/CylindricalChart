import styled, { keyframes } from "styled-components";

// 애니메이션 정의
const fallAnimation = keyframes`
 0% {
    transform: translateX(-20px);
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
export const SpeedChartsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 40px;
  background-color: white;
  min-height: 400px;
`;

export const SpeedChartItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
  max-width: 600px;
`;

export const StyledSpeedCylinderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  justify-content: center;
  position: relative;
  width: 100%;
`;

export const SpeedDotsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  position: absolute;
  z-index: 1;
  margin-top: -25px;

  &.left-dots {
    left: 10px;
  }

  &.right-dots {
    right: 10px;
  }
`;

export const StyledSpeedDot = styled.div`
  width: 73px;
  height: 7px;
  opacity: ${(props) => props.opacity};
  animation: ${fallAnimation} 2s ease-in-out infinite;
  animation-delay: ${(props) => props.delay || 0}s;
  margin-top: ${(props) => props.randomMarginTop || 0}px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const StyledSpeedCylinder = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const SpeedCylinderCircle = styled.div`
  width: 27px;
  height: 60px;
  margin-right: -15px; // 원끼리 겹침의 정도
  opacity: 1;
  transform: scaleX(0.8);
  position: relative;
  z-index: 2;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const SpeedLeftGradientCircle = styled.div`
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

export const SpeedEntranceGroup = styled.div`
  position: relative;
  width: 50px; /* 전체 그룹의 너비 */
  height: 70px;
  opacity: 1;
  z-index: 1;
  left: -22px; // 원통 중앙에 맞춤 (하단 label 때문에 어쩔 수 없음)
  top: -8px; // 원통 중앙에 맞춤 (하단 label 때문에 어쩔 수 없음)

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
`;

export const SpeedCylinderFill = styled.div`
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

export const SpeedValueDisplay = styled.div`
  position: absolute;
  left: 50%;
  top: 40%;
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

export const SpeedChartLabel = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  text-align: center;
  margin-top: 10px;
  width: 100%;
`;
