// API 응답을 차트 데이터로 변환하는 매퍼 서비스
// README의 API 응답 형식을 차트 컴포넌트가 사용하는 데이터 형식으로 변환

import { transformRequestSchema, simulateApiRequest } from "./chartApiService";
import { generateRequestSchema } from "./requestSchemaUtils";
import {
  mapApiResponseToCylinderChart,
  mapApiResponseToSpeedChart,
  mapApiResponseToEqualizerChart,
} from "./chartDataTransformers";

// 차트 데이터 변환 함수들을 re-export
export {
  mapApiResponseToCylinderChart,
  mapApiResponseToSpeedChart,
  mapApiResponseToEqualizerChart,
} from "./chartDataTransformers";

// 설정 변경에 따른 데이터 새로고침
export const refreshChartData = async (settings, chartType) => {
  try {
    // API 요청 스키마 생성
    const requestSchema = generateRequestSchema(settings, chartType);
    const transformedSchema = transformRequestSchema(requestSchema);

    // API 요청 시뮬레이션
    const apiResponse = await simulateApiRequest(transformedSchema);

    // 차트 타입에 따른 데이터 변환
    if (chartType === "cylinder") {
      return mapApiResponseToCylinderChart(apiResponse, requestSchema);
    } else if (chartType === "equalizer") {
      return mapApiResponseToEqualizerChart(apiResponse, requestSchema);
    } else {
      return mapApiResponseToSpeedChart(apiResponse, requestSchema);
    }
  } catch (error) {
    console.error("차트 데이터 새로고침 실패:", error);
    return [];
  }
};

// generateRequestSchema도 re-export
export { generateRequestSchema } from "./requestSchemaUtils";

const chartDataMapper = {
  mapApiResponseToCylinderChart,
  mapApiResponseToSpeedChart,
  mapApiResponseToEqualizerChart,
  refreshChartData,
  generateRequestSchema,
};

export default chartDataMapper;
