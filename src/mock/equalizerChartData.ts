// 이퀄라이저 차트용 모의 데이터
// README API 스펙 기반: /api/widget/live/equalizerChart

export interface EqualizerChartDataItem {
  value: number;
  label: string;
  color?: string;
  timestamp?: number;
  serverName?: string;
  metricType?: "cpu" | "memory" | "filesystem";
  unit?: string;
}

// 예시 1: CPU/메모리 이퀄라이저 차트 (AUTO) - README API 응답 형태
export const equalizerChartDataExample1: EqualizerChartDataItem[] = [
  {
    value: 0.47,
    label: "ubuntu2004",
    color: "#007bff",
    timestamp: 1760156880000,
    serverName: "ubuntu2004",
    metricType: "cpu",
    unit: "PERCENTAGE",
  },
  {
    value: 7.71,
    label: "ubuntu2204-230-104",
    color: "#28a745",
    timestamp: 1760156880000,
    serverName: "ubuntu2204-230-104",
    metricType: "cpu",
    unit: "PERCENTAGE",
  },
  {
    value: 20.46,
    label: "ubuntu2204-213-107",
    color: "#ffc107",
    timestamp: 1760156880000,
    serverName: "ubuntu2204-213-107",
    metricType: "cpu",
    unit: "PERCENTAGE",
  },
  {
    value: 2.48,
    label: "ubuntu2204-213-133",
    color: "#dc3545",
    timestamp: 1760156880000,
    serverName: "ubuntu2204-213-133",
    metricType: "cpu",
    unit: "PERCENTAGE",
  },
  {
    value: 22.62,
    label: "ubuntu2204-213-133",
    color: "#6f42c1",
    timestamp: 1760156880000,
    serverName: "ubuntu2204-213-133",
    metricType: "memory",
    unit: "PERCENTAGE",
  },
  {
    value: 84.34,
    label: "ubuntu2204-213-107",
    color: "#20c997",
    timestamp: 1760156880000,
    serverName: "ubuntu2204-213-107",
    metricType: "memory",
    unit: "PERCENTAGE",
  },
  {
    value: 6.36,
    label: "ubuntu2204-230-104",
    color: "#fd7e14",
    timestamp: 1760156880000,
    serverName: "ubuntu2204-230-104",
    metricType: "memory",
    unit: "PERCENTAGE",
  },
  {
    value: 35.09,
    label: "ubuntu2004",
    color: "#e83e8c",
    timestamp: 1760156880000,
    serverName: "ubuntu2004",
    metricType: "memory",
    unit: "PERCENTAGE",
  },
];

// 예시 2: 디스크 사용률 이퀄라이저 (MANUAL) - README API 응답 형태
export const equalizerChartDataExample2: EqualizerChartDataItem[] = [
  {
    value: 9.69,
    label: "/data",
    color: "#28a745",
    timestamp: 1760156880000,
    serverName: "/data",
    metricType: "filesystem",
    unit: "PERCENTAGE",
  },
  {
    value: 36.31,
    label: "/app",
    color: "#1e7e34",
    timestamp: 1760156880000,
    serverName: "/app",
    metricType: "filesystem",
    unit: "PERCENTAGE",
  },
  {
    value: 12.57,
    label: "/data4",
    color: "#155724",
    timestamp: 1760156880000,
    serverName: "/data4",
    metricType: "filesystem",
    unit: "PERCENTAGE",
  },
  {
    value: 11.46,
    label: "/boot",
    color: "#0d4a1a",
    timestamp: 1760156880000,
    serverName: "/boot",
    metricType: "filesystem",
    unit: "PERCENTAGE",
  },
  {
    value: 2.41,
    label: "/data3",
    color: "#0a3d15",
    timestamp: 1760156880000,
    serverName: "/data3",
    metricType: "filesystem",
    unit: "PERCENTAGE",
  },
  {
    value: 50.95,
    label: "/var/snap/firefox/common/host-hunspell",
    color: "#083010",
    timestamp: 1760156880000,
    serverName: "/var/snap/firefox/common/host-hunspell",
    metricType: "filesystem",
    unit: "PERCENTAGE",
  },
  {
    value: 2.57,
    label: "/boot/efi",
    color: "#06230b",
    timestamp: 1760156880000,
    serverName: "/boot/efi",
    metricType: "filesystem",
    unit: "PERCENTAGE",
  },
  {
    value: 50.95,
    label: "/",
    color: "#041606",
    timestamp: 1760156880000,
    serverName: "/",
    metricType: "filesystem",
    unit: "PERCENTAGE",
  },
  {
    value: 34.19,
    label: "/home",
    color: "#020a03",
    timestamp: 1760156880000,
    serverName: "/home",
    metricType: "filesystem",
    unit: "PERCENTAGE",
  },
];

// 기본 이퀄라이저 차트 데이터 (README API 응답 형태 기반)
export const defaultEqualizerChartData: EqualizerChartDataItem[] = [
  {
    value: 0.47,
    label: "ubuntu2004",
    color: "#007bff",
    timestamp: 1760156880000,
    serverName: "ubuntu2004",
    metricType: "cpu",
    unit: "PERCENTAGE",
  },
  {
    value: 7.71,
    label: "ubuntu2204-230-104",
    color: "#28a745",
    timestamp: 1760156880000,
    serverName: "ubuntu2204-230-104",
    metricType: "cpu",
    unit: "PERCENTAGE",
  },
  {
    value: 20.46,
    label: "ubuntu2204-213-107",
    color: "#ffc107",
    timestamp: 1760156880000,
    serverName: "ubuntu2204-213-107",
    metricType: "cpu",
    unit: "PERCENTAGE",
  },
  {
    value: 2.48,
    label: "ubuntu2204-213-133",
    color: "#dc3545",
    timestamp: 1760156880000,
    serverName: "ubuntu2204-213-133",
    metricType: "cpu",
    unit: "PERCENTAGE",
  },
  {
    value: 22.62,
    label: "ubuntu2204-213-133",
    color: "#6f42c1",
    timestamp: 1760156880000,
    serverName: "ubuntu2204-213-133",
    metricType: "memory",
    unit: "PERCENTAGE",
  },
  {
    value: 84.34,
    label: "ubuntu2204-213-107",
    color: "#20c997",
    timestamp: 1760156880000,
    serverName: "ubuntu2204-213-107",
    metricType: "memory",
    unit: "PERCENTAGE",
  },
  {
    value: 6.36,
    label: "ubuntu2204-230-104",
    color: "#fd7e14",
    timestamp: 1760156880000,
    serverName: "ubuntu2204-230-104",
    metricType: "memory",
    unit: "PERCENTAGE",
  },
  {
    value: 35.09,
    label: "ubuntu2004",
    color: "#e83e8c",
    timestamp: 1760156880000,
    serverName: "ubuntu2004",
    metricType: "memory",
    unit: "PERCENTAGE",
  },
];

// 이퀄라이저 차트 설정 옵션
export interface EqualizerChartConfig {
  viewCount: "AUTO" | "FIVE" | "TEN" | "TWENTY";
  rotationTime: "AUTO" | "SEC_10" | "SEC_30" | "MIN_1";
  maxValueSetType: "AUTO" | "MANUAL";
  max?: number;
  useViewSum: boolean;
}

export const defaultEqualizerChartConfig: EqualizerChartConfig = {
  viewCount: "TEN",
  rotationTime: "SEC_10",
  maxValueSetType: "AUTO",
  useViewSum: true,
};

// 이퀄라이저 바 색상 범위 설정
export interface EqualizerColorRange {
  min: number;
  max: number;
  color: string;
}

export const defaultEqualizerColorRanges: EqualizerColorRange[] = [
  { min: 0, max: 20, color: "#28a745" }, // 녹색 (낮음)
  { min: 20, max: 40, color: "#ffc107" }, // 노란색 (보통)
  { min: 40, max: 60, color: "#fd7e14" }, // 주황색 (높음)
  { min: 60, max: 80, color: "#dc3545" }, // 빨간색 (매우 높음)
  { min: 80, max: 100, color: "#6f42c1" }, // 보라색 (최고)
];

// 주파수 대역별 기본 색상
export const frequencyColors: { [key: string]: string } = {
  "60Hz": "#ff6b6b",
  "170Hz": "#4ecdc4",
  "310Hz": "#45b7d1",
  "600Hz": "#96ceb4",
  "1kHz": "#feca57",
  "3kHz": "#ff9ff3",
  "6kHz": "#54a0ff",
  "10kHz": "#5f27cd",
  "16kHz": "#00d2d3",
  "20kHz": "#ff9f43",
};
