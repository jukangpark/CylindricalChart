import React, { useState } from "react";
import ChartContainer from "../ChartContainer";
import CylinderChart from "../cylinderChart/CylinderChart";

const CylinderChartSection = ({ data, thresholdArray, onApiRequest }) => {
  const [settings, setSettings] = useState({
    viewCount: "AUTO",
    rotationTime: "AUTO",
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
      title="실린더 차트"
      chartType="cylinder"
      data={data}
      onSettingsChange={handleSettingsChange}
      onApiRequest={handleApiRequest}
    >
      <CylinderChart data={data} thresholdArray={thresholdArray} />
    </ChartContainer>
  );
};

export default CylinderChartSection;
