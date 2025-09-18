import React from "react";
import "./App.css";
import VerticalCylindricalChart from "./components/VerticalCylindricalChart";
import HorizontalCylinderChart from "./components/horizontalCylinderChart/HorizontalCylinderChart";

function App() {
  // threshold 값 설정 (이 값을 넘어가는 원들만 빨간색으로 표시)
  const threshold = 300;

  // 이미지를 참조한 샘플 데이터
  const chartData = [
    {
      value: 20,
      label: "영업관리",
    },
    {
      value: 314,
      label: "jennifer-pro>",
    },
    {
      value: 150,
      label: "시스템관리",
    },
    {
      value: 0,
      label: "test1",
    },
    {
      value: 314,
      label: "test2",
    },
    {
      value: 500,
      label: "test3",
    },
    {
      value: 10,
      label: "test1",
    },
  ];

  const thresholdArray = [
    {
      value: 100,
      label: "01",
      color: "#A2D3F5",
    },
    {
      value: 200,
      label: "02",
      color: "#FFE7AB",
    },
    {
      value: 300,
      label: "03",
      color: "#DBCDFA",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>실린더 차트 예시</h1>
        <p>Threshold: {threshold} (이 값을 넘어가는 원들만 빨간색으로 표시)</p>
      </header>
      <main>
        <section>
          <h2>세로형 실린더 차트</h2>
          <VerticalCylindricalChart
            data={chartData}
            maxValue={500}
            threshold={threshold}
          />
        </section>

        <section style={{ marginTop: "50px" }}>
          <h2>가로형 실린더 차트</h2>
          <HorizontalCylinderChart
            data={chartData}
            maxValue={500}
            thresholdArray={thresholdArray}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
