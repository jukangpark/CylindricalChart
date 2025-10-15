// 실린더 차트용 모의 데이터
// README API 스펙 기반: /api/widget/live/cylinderChart

export interface CylinderChartDataItem {
  value: number;
  label: string;
  color?: string;
  timestamp?: number;
  serverName?: string;
  metricType?: "cpu" | "memory" | "filesystem";
}

// 예시 1: 단일 DataCondition 사용 (CPU 사용률)
export const cylinderChartDataExample1: CylinderChartDataItem[] = [
  {
    value: 2.48,
    label: "ubuntu2204-213-133",
    color: "#007bff",
    timestamp: 1760156880000,
    serverName: "ubuntu2204-213-133",
    metricType: "cpu",
  },
  {
    value: 0.47,
    label: "ubuntu2004",
    color: "#28a745",
    timestamp: 1760156880000,
    serverName: "ubuntu2004",
    metricType: "cpu",
  },
  {
    value: 7.71,
    label: "ubuntu2204-230-104",
    color: "#ffc107",
    timestamp: 1760156880000,
    serverName: "ubuntu2204-230-104",
    metricType: "cpu",
  },
  {
    value: 20.46,
    label: "ubuntu2204-213-107",
    color: "#dc3545",
    timestamp: 1760156880000,
    serverName: "ubuntu2204-213-107",
    metricType: "cpu",
  },
];

// 예시 3: 파일시스템 사용률 (GroupBy 활용)
export const cylinderChartDataExample3: CylinderChartDataItem[] = [
  {
    value: 44.1,
    label: "/boot",
    color: "#6f42c1",
    metricType: "filesystem",
  },
  {
    value: 12.57,
    label: "/data4",
    color: "#20c997",
    metricType: "filesystem",
  },
  {
    value: 39.09,
    label: "/app",
    color: "#fd7e14",
    metricType: "filesystem",
  },
  {
    value: 9.69,
    label: "/data",
    color: "#6c757d",
    metricType: "filesystem",
  },
  {
    value: 0.57,
    label: "/boot/efi",
    color: "#e83e8c",
    metricType: "filesystem",
  },
];

// 예시 4: 복합 메트릭 (CPU + 메모리 + 파일시스템)
export const cylinderChartDataExample4: CylinderChartDataItem[] = [
  // CPU 사용률
  {
    value: 7.71,
    label: "ubuntu2204-230-104 CPU",
    color: "#007bff",
    metricType: "cpu",
  },
  {
    value: 20.46,
    label: "ubuntu2204-213-107 CPU",
    color: "#0056b3",
    metricType: "cpu",
  },
  {
    value: 0.47,
    label: "ubuntu2004 CPU",
    color: "#004085",
    metricType: "cpu",
  },
  {
    value: 2.48,
    label: "ubuntu2204-213-133 CPU",
    color: "#003d82",
    metricType: "cpu",
  },
  // 메모리 사용률
  {
    value: 84.34,
    label: "ubuntu2204-213-107 Memory",
    color: "#dc3545",
    metricType: "memory",
  },
  {
    value: 35.09,
    label: "ubuntu2004 Memory",
    color: "#c82333",
    metricType: "memory",
  },
  {
    value: 22.62,
    label: "ubuntu2204-213-133 Memory",
    color: "#bd2130",
    metricType: "memory",
  },
  {
    value: 6.36,
    label: "ubuntu2204-230-104 Memory",
    color: "#a71e2c",
    metricType: "memory",
  },
  // 파일시스템 사용률
  {
    value: 40.78,
    label: "ubuntu2204-213-107 FS",
    color: "#28a745",
    metricType: "filesystem",
  },
  {
    value: 72.64,
    label: "ubuntu2004 FS",
    color: "#1e7e34",
    metricType: "filesystem",
  },
];

// 기본 실린더 차트 데이터 (기존 데이터를 변환)
export const defaultCylinderChartData: CylinderChartDataItem[] = [
  {
    value: 20,
    label: "영업관리",
    color: "#007bff",
  },
  {
    value: 314,
    label: "jennifer-pro",
    color: "#28a745",
  },
  {
    value: 150,
    label: "시스템관리",
    color: "#ffc107",
  },
  {
    value: 0,
    label: "test1",
    color: "#dc3545",
  },
  {
    value: 314,
    label: "test2",
    color: "#6f42c1",
  },
  {
    value: 500,
    label: "test3",
    color: "#20c997",
  },
  {
    value: 1000,
    label: "test4",
    color: "#fd7e14",
  },
];

// 실린더 차트 설정 옵션
export interface CylinderChartConfig {
  viewCount: "AUTO" | "FIVE" | "TEN" | "TWENTY";
  rotationTime: "AUTO" | "SEC_10" | "SEC_30" | "MIN_1";
  maxValue?: number;
}

export const defaultCylinderChartConfig: CylinderChartConfig = {
  viewCount: "TEN",
  rotationTime: "SEC_30",
  maxValue: 1000,
};
