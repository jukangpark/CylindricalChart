import styled, { keyframes } from "styled-components";

// 애니메이션 정의
const fallAnimation = keyframes`
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const waveAnimation = keyframes`
  0% {
    transform: scaleY(0.8) scaleX(1);
    opacity: 0.5;
  }
  50% {
    transform: scaleY(1.2) scaleX(1.1);
    opacity: 0.8;
  }
  100% {
    transform: scaleY(0.8) scaleX(1);
    opacity: 0.5;
  }
`;

const pulseAnimation = keyframes`
  0% {
    opacity: 0.3;
    transform: scaleY(0.8) scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scaleY(0.8) scale(1.05);
  }
  100% {
    opacity: 0.3;
    transform: scaleY(0.8) scale(1);
  }
`;

// Styled Components
export const ChartsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 40px;
  background-color: white;
  min-height: 400px;
`;

export const ChartItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CylinderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  justify-content: center;
  position: relative;
`;

export const DotsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  position: absolute;
  z-index: 3;

  &.top-dots {
    top: 10px;
  }

  &.bottom-dots {
    bottom: 10px;
  }
`;

export const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  opacity: ${(props) => props.opacity};
  animation: ${fallAnimation} 0.6s ease-out ${(props) => props.delay}s infinite;
`;

export const VerticalCylinder = styled.div`
  position: relative;
  width: 80px;
  height: 300px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CylinderCircle = styled.div`
  width: 100%;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color || "#007bff"};
  margin-bottom: -10px;
  opacity: 0.5;
  transform: scaleY(0.8);
  animation: ${waveAnimation} 8s ease-in-out ${(props) => props.delay * 0.5}s
    infinite;

  /* 물결 효과를 위한 추가 애니메이션 */
  &:nth-child(even) {
    animation: ${pulseAnimation} 4s ease-in-out ${(props) => props.delay * 0.8}s
      infinite;
  }

  &:nth-child(odd) {
    animation: ${waveAnimation} 8s ease-in-out ${(props) => props.delay * 0.5}s
      infinite;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const CylinderFill = styled.div`
  width: 100%;
  background-color: transparent;
  border-radius: 40px;
  position: relative;
  transition: height 0.5s ease;
  height: ${(props) => props.fillHeight}%;
  min-height: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.fillHeight === 0 ? "center" : "flex-end"};
  align-items: center;
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

/** 실린더 회색 컨테이너 아래에 표시되는 데이터 라벨 */
export const ChartLabel = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #333;
  text-align: center;
  margin-top: 5px;
`;
