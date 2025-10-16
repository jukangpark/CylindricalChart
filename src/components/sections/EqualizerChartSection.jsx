import React from "react";
import ChartContainer from "../ChartContainer";
import EqualizerChart from "../equalizerChart/EqualizerChart";

const EqualizerChartSection = ({ data, thresholdArray, onApiRequest }) => {
  const handleApiRequest = async (newSettings) => {
    // API 요청 시뮬레이션 버튼 클릭 시에만 App.js로 전달
    if (onApiRequest) {
      await onApiRequest(newSettings);
    }
  };

  return (
    <ChartContainer
      title="이퀄라이저 차트"
      chartType="equalizer"
      data={data}
      onApiRequest={handleApiRequest}
    >
      <EqualizerChart data={data} thresholdArray={thresholdArray} />
    </ChartContainer>
  );
};

export default EqualizerChartSection;
