import React from "react";
import ChartContainer from "../ChartContainer";
import SpeedChart from "../speedChart/SpeedChart";

const SpeedChartSection = ({ data, thresholdArray, onApiRequest }) => {
  const handleApiRequest = async (newSettings) => {
    // API 요청 시뮬레이션 버튼 클릭 시에만 App.js로 전달
    if (onApiRequest) {
      await onApiRequest(newSettings);
    }
  };

  return (
    <ChartContainer
      title="스피드 차트"
      chartType="speed"
      data={data}
      onApiRequest={handleApiRequest}
    >
      <SpeedChart data={data} thresholdArray={thresholdArray} />
    </ChartContainer>
  );
};

export default SpeedChartSection;
