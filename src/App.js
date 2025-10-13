import React from "react";
import "./App.css";
import HorizontalCylinderChart from "./components/horizontalCylinderChart/HorizontalCylinderChart";
import VerticalCylindricalChart from "./components/verticalCylinderChart/VerticalCylindricalChart";
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
          <h2>세로형 실린더 차트</h2>
          <div>
            <VerticalCylindricalChart
              data={chartData}
              thresholdArray={thresholdArray}
            />
          </div>
        </section>

        <section style={{ marginTop: "50px" }}>
          <h2>가로형 실린더 차트</h2>
          <HorizontalCylinderChart
            data={chartData}
            thresholdArray={thresholdArray}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
