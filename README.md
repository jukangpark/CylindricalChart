# 실린더 차트 (Cylindrical Chart)

React와 styled-components를 사용하여 구현된 인터랙티브한 실린더 차트 컴포넌트입니다.

## 🎯 주요 기능

### 📊 데이터 시각화

- **실린더 형태의 차트**: 세로로 긴 실린더 모양으로 데이터를 시각화
- **동적 높이 조절**: 데이터 값에 비례하여 실린더 높이가 자동 조절
- **다중 데이터 지원**: 여러 개의 실린더를 동시에 표시 가능

### 🎨 시각적 효과

- **겹쳐진 원형 레이어**: 여러 개의 타원형 원이 겹쳐져서 실린더 효과 구현
- **투명도 효과**: 원들이 겹치면서 자연스러운 색상 혼합
- **애니메이션**: 물결치는 효과와 펄스 효과로 생동감 있는 표현

### ✨ 인터랙티브 요소

- **움직이는 점들**: 상단과 하단에 데이터 값에 비례한 개수의 점들이 애니메이션
- **중앙 진화 효과**: 점들이 중앙으로 갈수록 색상이 진해지는 그라데이션
- **순차적 애니메이션**: 각 요소가 순차적으로 나타나는 효과

## 🛠️ 기술 스택

- **React**: 컴포넌트 기반 UI 라이브러리
- **styled-components**: CSS-in-JS 스타일링
- **CSS Animations**: keyframes를 활용한 애니메이션

## 📦 설치 및 사용법

### 설치

```bash
npm install styled-components
```

### 기본 사용법

```jsx
import CylindricalChart from "./components/CylindricalChart";

const data = [
  {
    value: 314,
    label: "jennifer-pro>",
    color: "#007bff",
  },
  {
    value: 0,
    label: "영업관리",
    color: "#007bff",
  },
  {
    value: 150,
    label: "시스템관리",
    color: "#007bff",
  },
];

function App() {
  return <CylindricalChart data={data} maxValue={500} />;
}
```

## 🔧 Props

| Prop       | Type   | Default | Description                      |
| ---------- | ------ | ------- | -------------------------------- |
| `data`     | Array  | -       | 차트에 표시할 데이터 배열 (필수) |
| `maxValue` | Number | 1000    | 최대값 (높이 계산 기준)          |

### Data 객체 구조

```javascript
{
  value: number,    // 표시할 값 (필수)
  label: string,    // 하단 라벨 (필수)
  color: string     // 실린더 색상 (선택, 기본값: #007bff)
}
```

## 🎨 스타일링 특징

### 실린더 구조

- **회색 컨테이너**: 80px × 300px 크기의 배경
- **겹쳐진 원형**: 20px 높이의 타원형 원들이 겹쳐짐
- **투명도**: 50% 투명도로 겹침 효과 구현

### 애니메이션 효과

- **물결 애니메이션**: 8-10초 주기로 물결치는 효과
- **펄스 애니메이션**: 4-6초 주기로 투명도 변화
- **점 애니메이션**: 위에서 아래로 떨어지는 효과

### 반응형 디자인

- **유연한 레이아웃**: flexbox를 활용한 반응형 구조
- **동적 크기 조절**: 데이터 값에 따른 자동 크기 조절

## 🔄 애니메이션 세부사항

### 점 애니메이션

```css
/* 위에서 아래로 떨어지는 효과 */
animation: fallAnimation 0.6s ease-out delay infinite;
```

### 원형 레이어 애니메이션

```css
/* 물결 효과 */
animation: waveAnimation 8s ease-in-out delay infinite;

/* 펄스 효과 (짝수 번째) */
animation: pulseAnimation 4s ease-in-out delay infinite;
```

## 📱 브라우저 지원

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🎯 사용 사례

- **데이터 대시보드**: 실시간 데이터 모니터링
- **성능 지표**: 시스템 성능이나 사용량 표시
- **통계 차트**: 수치 데이터의 시각적 표현
- **게임 UI**: 체력바, 경험치 등의 게임 요소

## 🔧 커스터마이징

### 색상 변경

```jsx
const customData = [
  {
    value: 100,
    label: "커스텀",
    color: "#ff6b6b", // 원하는 색상으로 변경
  },
];
```

### 애니메이션 속도 조절

`cylindricalStyle.js`에서 애니메이션 duration을 수정:

```css
animation: ${waveAnimation} 8s ease-in-out; /* 8s를 원하는 값으로 변경 */
```

## 📡 API 스펙

### Speed Chart API

#### 엔드포인트

```
POST /api/widget/live/speedChart
```

#### 설명

스피드 차트(속도계) 위젯을 위한 데이터를 조회합니다. 게이지 형태로 현재 값을 시각화합니다.

#### 위젯 구조

- **SpeedChartWidget** extends **InOutDataConditionWidget**

#### 필수 속성

- `visualization`: 위젯 타입 (SPEED_CHART)
- `dataConditionType`: 데이터 조건 타입 (INDIVIDUAL 권장)

#### InOutDataConditionWidget 속성

- `tagFilters`: 전역 태그 필터 배열 (선택)
- `inData`: 인바운드 메트릭 데이터 (MetricData 객체, 선택)
- `dataCondition`: 메인 데이터 조건 (DataCondition 객체, 선택)
- `outData`: 아웃바운드 메트릭 데이터 (MetricData 객체, 선택)

#### DataCondition 구조

- `metricData`: MetricData 배열 (필수)
- `definition`: MeasurementDefinition 객체 (메트릭 정의)
- `tagFilters`: 메트릭별 태그 필터 배열 (빈 배열 가능)
- `metricValueTypes`: 값 타입 배열 ["avg", "max", "min"]
- `groupBys`: 그룹화 필드 배열 (빈 배열 가능)
- `limitCount`: 제한 개수 (빈 문자열은 제한 없음)
- `metricCalculation`: 계산 방식 (NONE, ALL, INDIVIDUAL)
- `calculationType`: 집계 타입 (AVG, MAX, MIN, SUM) - metricCalculation이 ALL일 때 필요
- `mode`: 데이터 모드 (NOW: 현재 시간 기준, RAW: 지정된 시간 범위)
- `startTime`, `endTime`: 조회 시간 범위 (Unix timestamp, milliseconds)
- `interval`: 데이터 간격 (초, 0은 간격 없음)

#### 사용 패턴

1. **dataCondition만 사용**: 단일 메트릭 데이터 조회
2. **inData + outData 사용**: 인/아웃바운드 메트릭 비교
3. **tagFilters 적용**: 전역 태그 조건으로 필터링
4. **모든 속성 조합**: 복합 메트릭 분석

#### 예시 1: 기본 DataCondition 사용

**Request Body:**

```json
{
  "visualization": "SPEED_CHART",
  "dataConditionType": "INDIVIDUAL",
  "dataCondition": {
    "metricData": [
      {
        "definition": {
          "id": "server.Cpu_Utilization",
          "resourceType": "server.Cpu",
          "name": "Utilization",
          "displayName": "CPU 사용률",
          "displayKey": "sms.cpu_utilization",
          "alias": "U",
          "units": "PERCENTAGE",
          "measurementType": "METRIC",
          "numericType": "DYNAMIC",
          "deleted": false,
          "protocolInfo": "4.3.24.0",
          "osType": "ALL"
        },
        "tagFilters": [],
        "metricValueTypes": ["avg"],
        "groupBys": [],
        "limitCount": ""
      }
    ],
    "metricCalculation": "NONE",
    "calculationType": "AVG",
    "mode": "NOW",
    "startTime": 1760135349665,
    "endTime": 1760156949665,
    "interval": 0
  }
}
```

**Response Body:**

```json
{
  "success": true,
  "data": [
    {
      "timestamp": 1760156880000,
      "server.Cpu_Utilization_avg": 7.78125
    },
    {
      "timestamp": 1760156760000,
      "server.Cpu_Utilization_avg": 7.559375000000001
    },
    {
      "timestamp": 1760156640000,
      "server.Cpu_Utilization_avg": 9.130208333333332
    }
  ],
  "errorCode": null,
  "errorMsgArgs": null,
  "errorData": null
}
```

#### 예시 2: InData/OutData 사용 (단일 메트릭)

**Request Body:**

```json
{
  "visualization": "SPEED_CHART",
  "dataConditionType": "INDIVIDUAL",
  "tagFilters": ["confType = server"],
  "inData": {
    "definition": {
      "id": "server.Cpu_Utilization",
      "resourceType": "server.Cpu",
      "name": "Utilization",
      "displayName": "CPU 사용률",
      "displayKey": "sms.cpu_utilization",
      "alias": "U",
      "units": "PERCENTAGE",
      "measurementType": "METRIC",
      "numericType": "DYNAMIC",
      "deleted": false,
      "protocolInfo": "4.3.24.0",
      "osType": "ALL"
    },
    "tagFilters": [],
    "metricValueTypes": ["avg"],
    "groupBys": [],
    "limitCount": ""
  },
  "outData": {
    "definition": {
      "id": "server.Memory_Utilization",
      "resourceType": "server.Memory",
      "name": "Utilization",
      "displayName": "메모리 사용률",
      "displayKey": "sms.memory_utilization",
      "alias": "U",
      "units": "PERCENTAGE",
      "measurementType": "METRIC",
      "numericType": "DYNAMIC",
      "deleted": false,
      "protocolInfo": "4.4.5.0",
      "osType": "ALL"
    },
    "tagFilters": [],
    "metricValueTypes": ["max"],
    "groupBys": [],
    "limitCount": ""
  }
}
```

**Response Body:**

```json
{
  "success": true,
  "data": [],
  "errorCode": null,
  "errorMsgArgs": null,
  "errorData": null
}
```

#### 예시 3: 태그 필터 적용

**Request Body:**

```json
{
  "visualization": "SPEED_CHART",
  "dataConditionType": "INDIVIDUAL",
  "tagFilters": ["confType = server"],
  "dataCondition": {
    "metricData": [
      {
        "definition": {
          "id": "server.FileSystems_Utilization",
          "resourceType": "server.FileSystems",
          "name": "Utilization",
          "displayName": "파일시스템들 사용률",
          "displayKey": "sms.filesystems_utilization",
          "alias": "U",
          "units": "PERCENTAGE",
          "measurementType": "METRIC",
          "numericType": "DYNAMIC",
          "deleted": false,
          "protocolInfo": "USAGE",
          "osType": "ALL"
        },
        "tagFilters": [],
        "metricValueTypes": ["avg"],
        "groupBys": [],
        "limitCount": ""
      }
    ],
    "metricCalculation": "NONE",
    "mode": "NOW",
    "startTime": 1760135349665,
    "endTime": 1760156949665,
    "interval": 0
  }
}
```

**Response Body:**

```json
{
  "success": true,
  "data": [
    {
      "timestamp": 1760156880000,
      "server.FileSystems_Utilization_avg": 35.797201761448605
    },
    {
      "timestamp": 1760156760000,
      "server.FileSystems_Utilization_avg": 41.14108464786598
    },
    {
      "timestamp": 1760156640000,
      "server.FileSystems_Utilization_avg": 41.15093042861683
    }
  ],
  "errorCode": null,
  "errorMsgArgs": null,
  "errorData": null
}
```

#### 예시 4: 모든 속성 사용 (InData + OutData + DataCondition + TagFilters)

**Request Body:**

```json
{
  "visualization": "SPEED_CHART",
  "dataConditionType": "INDIVIDUAL",
  "tagFilters": ["confType = server"],
  "inData": {
    "definition": {
      "id": "server.Cpu_Utilization",
      "resourceType": "server.Cpu",
      "name": "Utilization",
      "displayName": "CPU 사용률",
      "displayKey": "sms.cpu_utilization",
      "alias": "U",
      "units": "PERCENTAGE",
      "measurementType": "METRIC",
      "numericType": "DYNAMIC",
      "deleted": false,
      "protocolInfo": "4.3.24.0",
      "osType": "ALL"
    },
    "tagFilters": [],
    "metricValueTypes": ["avg"],
    "groupBys": [],
    "limitCount": ""
  },
  "outData": {
    "definition": {
      "id": "server.Memory_Utilization",
      "resourceType": "server.Memory",
      "name": "Utilization",
      "displayName": "메모리 사용률",
      "displayKey": "sms.memory_utilization",
      "alias": "U",
      "units": "PERCENTAGE",
      "measurementType": "METRIC",
      "numericType": "DYNAMIC",
      "deleted": false,
      "protocolInfo": "4.4.5.0",
      "osType": "ALL"
    },
    "tagFilters": [],
    "metricValueTypes": ["avg"],
    "groupBys": [],
    "limitCount": ""
  },
  "dataCondition": {
    "metricData": [
      {
        "definition": {
          "id": "server.FileSystem_Utilization",
          "resourceType": "server.FileSystem",
          "name": "Utilization",
          "displayName": "파일시스템 사용률",
          "displayKey": "sms.filesystem_utilization",
          "alias": "U",
          "units": "PERCENTAGE",
          "measurementType": "METRIC",
          "numericType": "DYNAMIC",
          "deleted": false,
          "protocolInfo": "USAGE",
          "osType": "ALL"
        },
        "tagFilters": [],
        "metricValueTypes": ["avg"],
        "groupBys": [],
        "limitCount": ""
      }
    ],
    "metricCalculation": "NONE",
    "calculationType": "MAX",
    "mode": "NOW",
    "startTime": 1760135349665,
    "endTime": 1760156949665,
    "interval": 0
  }
}
```

**Response Body:**

```json
{
  "success": true,
  "data": [
    {
      "timestamp": 1760156880000,
      "server.Cpu_Utilization_avg": 7.78125,
      "server.FileSystem_Utilization_avg": 28.7452,
      "server.Memory_Utilization_avg": 37.10145833333334
    },
    {
      "timestamp": 1760156760000,
      "server.Cpu_Utilization_avg": 7.559375000000001,
      "server.FileSystem_Utilization_avg": 32.00861111111111,
      "server.Memory_Utilization_avg": 37.0996875
    },
    {
      "timestamp": 1760156640000,
      "server.Cpu_Utilization_avg": 9.130208333333332,
      "server.FileSystem_Utilization_avg": 32.01166666666667,
      "server.Memory_Utilization_avg": 37.08708333333334
    }
  ],
  "errorCode": null,
  "errorMsgArgs": null,
  "errorData": null
}
```

## 📄 라이선스

MIT License

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
