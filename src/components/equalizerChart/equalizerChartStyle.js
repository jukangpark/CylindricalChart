import styled, { keyframes } from "styled-components";

// 애니메이션 정의
const stackAnimation = keyframes`
  0% {
    transform: scaleY(0.1);
    opacity: 0.7;
  }
  50% {
    transform: scaleY(1);
    opacity: 1;
  }
  100% {
    transform: scaleY(0.9);
    opacity: 0.9;
  }
`;

// 메인 컨테이너
export const EqualizerChartsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  gap: 12px;
  padding: 20px;
  min-height: 300px;
  position: relative;
`;

// 개별 이퀄라이저 바 컨테이너
export const EqualizerBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 2px;
  align-self: stretch;
  position: relative;
  height: 100%;
  min-height: 250px; /* ValueDisplay 공간 확보 */
`;

// 스택 컨테이너 (세로로 쌓이는 바들)
export const StackContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 2px;
  height: 200px;
  position: relative;
  margin-bottom: 4px; /* ValueDisplay와 스택바 사이 간격 */
`;

// 개별 스택 바
export const StackBar = styled.div`
  width: 82.8px;
  height: 4.197px;
  flex-shrink: 0;
  background: ${(props) => props.color || "#017AF5"};
  /* 맨 상단 스택에만 box-shadow 적용 */
  box-shadow: ${(props) =>
    props.isTopStack ? "0 4px 4px 0 rgba(0, 123, 245, 0.5)" : "none"};
  /* animation: ${stackAnimation} ${(props) => props.animationDuration || 1.5}s
    ease-in-out infinite; */
  animation-delay: ${(props) => props.animationDelay || 0}s;
  transition: all 0.3s ease;

  &:hover {
    transform: scaleY(1.1);
    box-shadow: ${(props) =>
      props.isTopStack ? "0 4px 8px 0 rgba(0, 123, 245, 0.7)" : "none"};
  }
`;

// 값 표시 (스택바 바로 위)
export const ValueDisplay = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #333;
  text-align: center;
  margin-bottom: 6px;
  z-index: 10;
  align-self: center;
`;

// 구분선 (스택바 맨 아래 기준) - 전체에 이어지는 구분선
export const DividerLine = styled.div`
  position: absolute;
  bottom: 110px; /* 라벨 위에 위치 */
  left: 20px;
  right: 20px;
  height: 1.5px;
  background: #899ea8;
  z-index: 5;
`;

// 이퀄라이저 바 라벨
export const EqualizerBarLabel = styled.div`
  font-size: 10px;
  font-weight: 500;
  color: #666;
  text-align: center;
  min-width: 60px;
  margin-top: 4px;
  height: 32px; /* 고정 높이 */
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 이퀄라이저 바 값 표시 (하단)
export const EqualizerBarValue = styled.div`
  font-size: 9px;
  font-weight: 400;
  color: #888;
  text-align: center;
  margin-top: 2px;
`;

// 반응형 디자인
export const EqualizerResponsiveContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    ${EqualizerChartsContainer} {
      gap: 8px;
      padding: 15px;
    }

    ${StackBar} {
      width: 60px;
      height: 3px;
    }

    ${EqualizerBarLabel} {
      font-size: 9px;
    }

    ${EqualizerBarValue} {
      font-size: 8px;
    }
  }

  @media (max-width: 480px) {
    ${EqualizerChartsContainer} {
      gap: 6px;
      padding: 10px;
    }

    ${StackBar} {
      width: 50px;
      height: 2.5px;
    }

    ${EqualizerBarLabel} {
      font-size: 8px;
    }

    ${EqualizerBarValue} {
      font-size: 7px;
    }
  }
`;
