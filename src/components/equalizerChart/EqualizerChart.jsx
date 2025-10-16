import React, { useMemo, useCallback } from "react";
import {
  EqualizerChartsContainer,
  EqualizerBarContainer,
  StackContainer,
  StackBar,
  ValueDisplay,
  DividerLine,
  EqualizerBarLabel,
  EqualizerResponsiveContainer,
} from "./equalizerChartStyle";

const EqualizerChart = ({ data, thresholdArray, maxValue = 100 }) => {
  // 스택 색상 결정 함수 (하단부터 보라색 → 노란색 → 파란색)
  const getStackColor = useCallback(
    (value, maxValue, stackIndex, totalStacks) => {
      // 3개 색상 배열 (하단부터 위로)
      const colors = ["#A57EF5", "#FFC52C", "#017AF5"]; // 보라색, 노란색, 파란색

      // 하단부터 위로 올라갈수록 색상 변화
      // 하단(0) = 보라색, 중간 = 노란색, 상단 = 파란색
      const colorIndex = stackIndex % colors.length;
      return colors[colorIndex];
    },
    []
  );

  // 데이터 처리 및 계산
  const processedData = useMemo(() => {
    if (!data || data.length === 0) return [];

    // 최대값 계산 (AUTO 모드인 경우)
    const calculatedMaxValue =
      maxValue === "AUTO"
        ? Math.max(...data.map((item) => item.value)) * 1.1 // 10% 여유분
        : maxValue;

    // 합계 계산
    const sum = data.reduce((acc, item) => acc + item.value, 0);

    // 각 항목의 스택 개수 계산 (값에 비례하여 스택 개수 결정)
    const processedItems = data.map((item, index) => {
      // 값에 비례하여 스택 개수 계산 (최소 1개, 최대 20개)
      const stackCount = Math.max(
        1,
        Math.min(20, Math.ceil((item.value / calculatedMaxValue) * 20))
      );

      // 스택 배열 생성
      const stacks = Array.from({ length: stackCount }, (_, stackIndex) => ({
        id: `${index}-${stackIndex}`,
        color: getStackColor(
          item.value,
          calculatedMaxValue,
          stackIndex,
          stackCount
        ),
        animationDelay: index * 0.1 + stackIndex * 0.05,
        animationDuration: 1.5 + (stackIndex % 3) * 0.3,
      }));

      return {
        ...item,
        stacks,
        stackCount,
        animationDelay: index * 0.1,
        animationDuration: 1.5 + (index % 3) * 0.5,
      };
    });

    return {
      items: processedItems,
      maxValue: calculatedMaxValue,
      sum: sum,
    };
  }, [data, maxValue, getStackColor]);

  if (!data || data.length === 0) {
    return (
      <EqualizerResponsiveContainer>
        <EqualizerChartsContainer>
          <div
            style={{
              color: "#666",
              fontSize: "16px",
              textAlign: "center",
              opacity: 0.7,
            }}
          >
            데이터가 없습니다
          </div>
        </EqualizerChartsContainer>
      </EqualizerResponsiveContainer>
    );
  }

  return (
    <EqualizerResponsiveContainer>
      <EqualizerChartsContainer>
        {/* 전체에 걸쳐 이어지는 구분선 (라벨 위) */}
        <DividerLine />

        {processedData.items.map((item, index) => (
          <EqualizerBarContainer key={index}>
            {/* 값 표시 (맨 상단) */}

            {/* 스택 컨테이너 */}
            <StackContainer>
              <ValueDisplay>{item.value.toFixed(1)}</ValueDisplay>
              {item.stacks.map((stack, stackIndex) => (
                <StackBar
                  key={stack.id}
                  color={stack.color}
                  animationDelay={stack.animationDelay}
                  animationDuration={stack.animationDuration}
                  isTopStack={stackIndex === 0}
                />
              ))}
            </StackContainer>

            {/* 라벨 */}
            <EqualizerBarLabel>{item.label}</EqualizerBarLabel>
          </EqualizerBarContainer>
        ))}
      </EqualizerChartsContainer>
    </EqualizerResponsiveContainer>
  );
};

export default EqualizerChart;
