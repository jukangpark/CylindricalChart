import React from "react";
import "./App.css";
import SpeedChart from "./components/speedChart/SpeedChart";
import CylinderChart from "./components/cylinderChart/CylinderChart";
import chartData from "./mock/chartData.ts";
import thresholdArray from "./mock/thresholdArray.ts";

function App() {
  // threshold 값 설정 (이 값을 넘어가는 원들만 빨간색으로 표시)
  const threshold = 300;

  return (
    <div className="App">
      <header className="App-header">
        <h1>실린더 차트 예시</h1>
        <p>Threshold: {threshold} (이 값을 넘어가는 원들만 빨간색으로 표시)</p>
      </header>
      <main>
        <section>
          <h2>실린더 차트</h2>
          <div>
            <CylinderChart data={chartData} thresholdArray={thresholdArray} />
          </div>
        </section>

        <section style={{ marginTop: "50px" }}>
          <h2>스피드 차트</h2>
          <SpeedChart data={chartData} thresholdArray={thresholdArray} />
        </section>
      </main>
    </div>
  );
}

export default App;
