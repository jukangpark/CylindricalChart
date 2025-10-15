import React, { useState } from "react";
import ChartContainer from "../ChartContainer";
import SpeedChart from "../speedChart/SpeedChart";

const SpeedChartSection = ({ data, thresholdArray, onApiRequest }) => {
  const [settings, setSettings] = useState({
    dataConditionType: "INDIVIDUAL",
    inData: "none",
    outData: "none",
  });

  const handleSettingsChange = (newSettings) => {
    setSettings(newSettings);
    // 설정만 업데이트하고 자동으로 API 요청하지 않음
  };

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
      onSettingsChange={handleSettingsChange}
      onApiRequest={handleApiRequest}
    >
      <SpeedChart data={data} thresholdArray={thresholdArray} />
    </ChartContainer>
  );
};

export default SpeedChartSection;
