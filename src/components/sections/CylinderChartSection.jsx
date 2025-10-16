import React from "react";
import ChartContainer from "../ChartContainer";
import CylinderChart from "../cylinderChart/CylinderChart";

const CylinderChartSection = ({ data, thresholdArray, onApiRequest }) => {
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
      onApiRequest={handleApiRequest}
    >
      <CylinderChart data={data} thresholdArray={thresholdArray} />
    </ChartContainer>
  );
};

export default CylinderChartSection;
