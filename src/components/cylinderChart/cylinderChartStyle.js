import styled, { keyframes } from "styled-components";

// 애니메이션 정의
const fallAnimation = keyframes`
  0% {
    transform: translateY(-50px);
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(50px);
    opacity: 1;
  }
`;

// Styled Components
export const CylinderChartsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 40px;
  background-color: white;
  min-height: 2500px;
  height: auto;
  overflow: hidden;
`;

export const StyledCylinderChartItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  position: relative;
  height: 100%;
  max-height: 400px;
  justify-content: center;
`;

export const StyledCylinderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  justify-content: center;
  position: relative;
  height: 100%;
  width: 100%;
`;

export const CylinderDotsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;

  &.top-dots {
    top: -25px; /* 원의 시작점보다 위에 위치 */
  }

  &.bottom-dots {
    bottom: -25px; /* 원의 끝점보다 아래에 위치 */
  }
`;

export const StyledCylinderDot = styled.div`
  width: 7px;
  height: 73px;
  opacity: ${(props) => props.opacity};
  animation: ${fallAnimation} 2s ease-in-out infinite;
  animation-delay: ${(props) => props.delay || 0}s;
  margin-left: ${(props) => props.randomMarginLeft || 0}px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const StyledCylinder = styled.div`
  position: relative;
  width: 80px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledCylinderCircle = styled.div`
  width: 60px;
  height: 27px;
  margin-bottom: -10px; // 원끼리 겹침의 정도
  opacity: 1;
  transform: scaleY(0.8);
  position: relative;
  z-index: 2;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const CylinderLeftGradientCircle = styled.div`
  width: 60px;
  height: 27px;
  margin-bottom: -10px;
  opacity: 1;
  transform: scaleY(0.8);
  position: relative;
  z-index: 1;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const CylinderEntranceGroup = styled.div`
  position: relative;
  width: 70px; /* 전체 그룹의 높이 */
  height: 50px;
  opacity: 1;
  z-index: 1;
  top: -22px; // 원통 중앙에 맞춤
  left: -8px; // 원통 중앙에 맞춤

  svg {
    position: absolute;
    left: 0;
    width: 100%;
  }

  svg:nth-child(1) {
    top: 5px;
    height: 65px;
    z-index: 3;
  }

  svg:nth-child(2) {
    top: 60px; /* 첫 번째 SVG와 겹치게 */
    height: 19px;
    z-index: 2;
  }

  svg:nth-child(3) {
    top: 60px; /* 두 번째 SVG와 겹치게 */
    height: 19px;
    z-index: 1;
  }
`;

export const CylinderFill = styled.div`
  width: 100%;
  background-color: transparent;
  border-radius: 40px;
  position: relative;
  transition: height 0.5s ease;
  height: ${(props) => Math.max(props.fillHeight * 20, 100)}px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.fillHeightValue === 0 ? "center" : "flex-end"};
  align-items: center;
  margin: 0 auto;
  z-index: 2;
`;

export const CylinderValueDisplay = styled.div`
  position: absolute;
  left: 60%;
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
  pointer-events: none; /* 텍스트 클릭 방지 */
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */
`;

export const CylinderChartLabel = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  text-align: center;
  margin-top: 10px;
  width: 100%;
`;
