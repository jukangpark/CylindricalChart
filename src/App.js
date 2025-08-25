import React from "react";
import "./App.css";
import CylindricalChart from "./components/CylindricalChart";
import HorizontalCylinderChart from "./components/HorizontalCylinderChart";

function App() {
  // threshold 값 설정 (이 값을 넘어가는 원들만 빨간색으로 표시)
  const threshold = 300;

  // 이미지를 참조한 샘플 데이터
  const chartData = [
    {
      value: 20,
      label: "영업관리",
      color: "#007bff",
    },
    {
      value: 314,
      label: "jennifer-pro>",
      color: "#007bff",
    },
    {
      value: 150,
      label: "시스템관리",
      color: "#007bff",
    },
    {
      value: 0,
      label: "test1",
      color: "#007bff",
    },
    {
      value: 314,
      label: "test2",
      color: "#007bff",
    },
    {
      value: 500,
      label: "test3",
      color: "#007bff",
    },
    {
      value: 10,
      label: "test1",
      color: "#007bff",
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
          <CylindricalChart
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
            threshold={threshold}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
