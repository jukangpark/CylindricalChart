// CylinderChart 관련 타입 정의

export interface Threshold {
  value: number;
  label: string;
  color: string;
}

export interface Group {
  children: any[];
  label: string;
  color: string;
  heightRatio: number;
}

export interface CylinderCircleContainerProps {
  children?: any;
  thresholdArray: Threshold[];
}

export interface CylinderCirclesProps {
  circleCount: number;
  thresholdArray: Threshold[];
  itemColor: string;
}
