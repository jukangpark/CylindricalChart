// SpeedChart 관련 타입 정의

export interface Threshold {
  value: number;
  label: string;
  color: string;
}

export interface Group {
  children: any[];
  label: string;
  color: string;
  widthRatio: number;
}

export interface SpeedCircleContainerProps {
  children?: any;
  thresholdArray: Threshold[];
}

export interface SpeedCirclesProps {
  circleCount: number;
  thresholdArray: Threshold[];
  itemColor: string;
}
