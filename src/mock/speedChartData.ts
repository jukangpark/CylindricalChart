// 스피드 차트용 모의 데이터
// README API 스펙 기반: /api/widget/live/speedChart

export interface SpeedChartDataItem {
  value: number;
  label: string;
  color?: string;
  timestamp?: number;
  serverName?: string;
  metricType?: "cpu" | "memory" | "filesystem";
  unit?: string;
}

// 예시 1: 기본 DataCondition 사용 (CPU 사용률)
export const speedChartDataExample1: SpeedChartDataItem[] = [
  {
    value: 7.78,
    label: "CPU 사용률",
    color: "#007bff",
    timestamp: 1760156880000,
    metricType: "cpu",
    unit: "PERCENTAGE",
  },
  {
    value: 7.56,
    label: "CPU 사용률",
    color: "#0056b3",
    timestamp: 1760156760000,
    metricType: "cpu",
    unit: "PERCENTAGE",
  },
  {
    value: 9.13,
    label: "CPU 사용률",
    color: "#004085",
    timestamp: 1760156640000,
    metricType: "cpu",
    unit: "PERCENTAGE",
  },
];

// 예시 3: 태그 필터 적용 (파일시스템 사용률)
export const speedChartDataExample3: SpeedChartDataItem[] = [
  {
    value: 35.8,
    label: "파일시스템 사용률",
    color: "#28a745",
    timestamp: 1760156880000,
    metricType: "filesystem",
    unit: "PERCENTAGE",
  },
  {
    value: 41.14,
    label: "파일시스템 사용률",
    color: "#1e7e34",
    timestamp: 1760156760000,
    metricType: "filesystem",
    unit: "PERCENTAGE",
  },
  {
    value: 41.15,
    label: "파일시스템 사용률",
    color: "#155724",
    timestamp: 1760156640000,
    metricType: "filesystem",
    unit: "PERCENTAGE",
  },
];

// 예시 4: 복합 메트릭 (CPU + 파일시스템 + 메모리)
export const speedChartDataExample4: SpeedChartDataItem[] = [
  {
    value: 7.78,
    label: "CPU 사용률",
    color: "#007bff",
    timestamp: 1760156880000,
    metricType: "cpu",
    unit: "PERCENTAGE",
  },
  {
    value: 28.75,
    label: "파일시스템 사용률",
    color: "#28a745",
    timestamp: 1760156880000,
    metricType: "filesystem",
    unit: "PERCENTAGE",
  },
  {
    value: 37.1,
    label: "메모리 사용률",
    color: "#dc3545",
    timestamp: 1760156880000,
    metricType: "memory",
    unit: "PERCENTAGE",
  },
];

// 기본 스피드 차트 데이터 (게이지 형태)
export const defaultSpeedChartData: SpeedChartDataItem[] = [
  {
    value: 75,
    label: "CPU 사용률",
    color: "#007bff",
    unit: "PERCENTAGE",
  },
  {
    value: 60,
    label: "메모리 사용률",
    color: "#28a745",
    unit: "PERCENTAGE",
  },
  {
    value: 45,
    label: "디스크 사용률",
    color: "#ffc107",
    unit: "PERCENTAGE",
  },
  {
    value: 30,
    label: "네트워크 사용률",
    color: "#dc3545",
    unit: "PERCENTAGE",
  },
];

// 스피드 차트 설정 옵션
export interface SpeedChartConfig {
  maxValue: number;
  minValue?: number;
  unit?: string;
  showLabels?: boolean;
  showValues?: boolean;
  animationDuration?: number;
}

export const defaultSpeedChartConfig: SpeedChartConfig = {
  maxValue: 100,
  minValue: 0,
  unit: "PERCENTAGE",
  showLabels: true,
  showValues: true,
  animationDuration: 1000,
};

// 게이지 색상 범위 설정
export interface GaugeColorRange {
  min: number;
  max: number;
  color: string;
}

export const defaultGaugeColorRanges: GaugeColorRange[] = [
  { min: 0, max: 30, color: "#28a745" }, // 녹색 (정상)
  { min: 30, max: 70, color: "#ffc107" }, // 노란색 (주의)
  { min: 70, max: 100, color: "#dc3545" }, // 빨간색 (위험)
];
