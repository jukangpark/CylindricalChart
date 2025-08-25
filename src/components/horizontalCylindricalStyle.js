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

const waveAnimation = keyframes`
  0% {
    transform: scaleX(0.8) scaleY(1);
    opacity: 0.5;
  }
  50% {
    transform: scaleX(1.2) scaleY(1.1);
    opacity: 0.8;
  }
  100% {
    transform: scaleX(0.8) scaleY(1);
    opacity: 0.5;
  }
`;

const pulseAnimation = keyframes`
  0% {
    opacity: 0.3;
    transform: scaleX(0.8) scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scaleX(0.8) scale(1.05);
  }
  100% {
    opacity: 0.3;
    transform: scaleX(0.8) scale(1);
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
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  opacity: ${(props) => props.opacity};
  animation: ${fallAnimation} 0.6s ease-out ${(props) => props.delay}s infinite;
`;

export const Cylinder = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  background-color: #f8f9fa;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const CylinderCircle = styled.div`
  width: 20px;
  height: 100%;
  border-radius: 50%;
  background-color: ${(props) => props.color || "#007bff"};
  margin-right: -10px;
  opacity: 0.5;
  transform: scaleX(0.8);
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
    margin-right: 0;
  }
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
  color: white;
  font-size: 20px;
  font-weight: 900;
  text-shadow: -1px -1px 0 gray, 1px -1px 0 gray, -1px 1px 0 gray,
    1px 1px 0 gray, 2px 2px 4px rgba(0, 0, 0, 0.8);
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
