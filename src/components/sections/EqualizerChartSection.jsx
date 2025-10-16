import React, { useState } from "react";
import ChartContainer from "../ChartContainer";
import EqualizerChart from "../equalizerChart/EqualizerChart";

const EqualizerChartSection = ({ data, thresholdArray, onApiRequest }) => {
  const [settings, setSettings] = useState({
    viewCount: "TEN",
    rotationTime: "SEC_10",
    maxValueSetType: "AUTO",
    max: 100,
    useViewSum: true,
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
      title="이퀄라이저 차트"
      chartType="equalizer"
      data={data}
      onSettingsChange={handleSettingsChange}
      onApiRequest={handleApiRequest}
    >
      <EqualizerChart
        data={data}
        thresholdArray={thresholdArray}
        maxValue={settings.maxValueSetType === "AUTO" ? "AUTO" : settings.max}
      />
    </ChartContainer>
  );
};

export default EqualizerChartSection;
