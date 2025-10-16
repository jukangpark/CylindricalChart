import React, { useState } from "react";
import "./App.css";
import CylinderChartSection from "./components/sections/CylinderChartSection";
import SpeedChartSection from "./components/sections/SpeedChartSection";
import EqualizerChartSection from "./components/sections/EqualizerChartSection";
import { cylinderChartDataExample1 } from "./mock/cylinderChartData.ts";
import { defaultSpeedChartData } from "./mock/speedChartData.ts";
import { defaultEqualizerChartData } from "./mock/equalizerChartData.ts";
import thresholdArray from "./mock/thresholdArray.ts";
import { refreshChartData } from "./services/chartDataMapper";

function App() {
  // threshold 값 설정 (이 값을 넘어가는 원들만 빨간색으로 표시)
  const threshold = 300;

  // 동적 차트 데이터 상태
  const [cylinderData, setCylinderData] = useState(cylinderChartDataExample1);
  const [speedData, setSpeedData] = useState(defaultSpeedChartData);
  const [equalizerData, setEqualizerData] = useState(defaultEqualizerChartData);
  const [isLoading, setIsLoading] = useState(false);

  // API 요청 시뮬레이션 버튼 클릭 시 차트 데이터 업데이트
  const handleCylinderApiRequest = async (newSettings) => {
    try {
      setIsLoading(true);
      const newData = await refreshChartData(newSettings, "cylinder");
      if (newData.length > 0) {
        setCylinderData(newData);
        console.log("🔄 실린더 차트 데이터 업데이트:", newData);
      }
    } catch (error) {
      console.error("실린더 차트 데이터 업데이트 실패:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSpeedApiRequest = async (newSettings) => {
    try {
      setIsLoading(true);
      const newData = await refreshChartData(newSettings, "speed");
      if (newData.length > 0) {
        setSpeedData(newData);
        console.log("🔄 스피드 차트 데이터 업데이트:", newData);
      }
    } catch (error) {
      console.error("스피드 차트 데이터 업데이트 실패:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEqualizerApiRequest = async (newSettings) => {
    try {
      setIsLoading(true);
      const newData = await refreshChartData(newSettings, "equalizer");
      if (newData.length > 0) {
        setEqualizerData(newData);
        console.log("🔄 이퀄라이저 차트 데이터 업데이트:", newData);
      }
    } catch (error) {
      console.error("이퀄라이저 차트 데이터 업데이트 실패:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>차트 대시보드</h1>
        <p>Threshold: {threshold} (이 값을 넘어가는 원들만 빨간색으로 표시)</p>
        {isLoading && (
          <p style={{ color: "#667eea" }}>🔄 차트 데이터 업데이트 중...</p>
        )}
      </header>
      <main>
        <CylinderChartSection
          data={cylinderData}
          thresholdArray={thresholdArray}
          onApiRequest={handleCylinderApiRequest}
        />

        <SpeedChartSection
          data={speedData}
          thresholdArray={thresholdArray}
          onApiRequest={handleSpeedApiRequest}
        />

        <EqualizerChartSection
          data={equalizerData}
          thresholdArray={thresholdArray}
          onApiRequest={handleEqualizerApiRequest}
        />
      </main>
    </div>
  );
}

export default App;
