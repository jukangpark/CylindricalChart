// 차트별 데이터 변환 로직

import { getColorForServer, getColorByIndex } from "./colorUtils.js";
import {
  extractServerName,
  extractMetricType,
  roundToTwoDecimals,
  extractLatestData,
  filterNonTimestampEntries,
} from "./dataParsingUtils.js";
import {
  generateCylinderDisplayName,
  generateSpeedChartDisplayName,
  generateEqualizerDisplayName,
} from "./displayNameUtils.js";

/**
 * 실린더 차트 데이터 변환
 * @param {Object} apiResponse - API 응답
 * @param {Object} requestSchema - 요청 스키마
 * @returns {Array} 변환된 차트 데이터
 */
export const mapApiResponseToCylinderChart = (apiResponse, requestSchema) => {
  const latestData = extractLatestData(apiResponse);
  if (!latestData) return [];

  const chartData = [];
  let colorIndex = 0;

  // API 응답의 각 필드를 차트 데이터로 변환
  const entries = filterNonTimestampEntries(Object.entries(latestData));

  entries.forEach(([key, value]) => {
    const serverName = extractServerName(key);
    const metricType = extractMetricType(key);
    const displayName = generateCylinderDisplayName(
      serverName,
      metricType,
      requestSchema
    );

    chartData.push({
      value: roundToTwoDecimals(value),
      label: displayName,
      color: getColorForServer(serverName, colorIndex++),
      timestamp: latestData.timestamp,
      serverName: serverName,
      metricType: metricType,
    });
  });

  // 값 기준으로 내림차순 정렬
  return chartData.sort((a, b) => b.value - a.value);
};

/**
 * 스피드 차트 데이터 변환
 * @param {Object} apiResponse - API 응답
 * @param {Object} requestSchema - 요청 스키마
 * @returns {Array} 변환된 차트 데이터
 */
export const mapApiResponseToSpeedChart = (apiResponse, requestSchema) => {
  const latestData = extractLatestData(apiResponse);
  if (!latestData) return [];

  const chartData = [];
  let colorIndex = 0;

  // API 응답의 각 필드를 차트 데이터로 변환
  const entries = filterNonTimestampEntries(Object.entries(latestData));

  entries.forEach(([key, value]) => {
    const metricType = extractMetricType(key);
    const displayName = generateSpeedChartDisplayName(
      metricType,
      requestSchema
    );

    chartData.push({
      value: roundToTwoDecimals(value),
      label: displayName,
      color: getColorByIndex(colorIndex),
      timestamp: latestData.timestamp,
      metricType: metricType,
      unit: "PERCENTAGE",
    });

    colorIndex++;
  });

  return chartData;
};

/**
 * 이퀄라이저 차트 데이터 변환
 * @param {Object} apiResponse - API 응답
 * @param {Object} requestSchema - 요청 스키마
 * @returns {Array} 변환된 차트 데이터
 */
export const mapApiResponseToEqualizerChart = (apiResponse, requestSchema) => {
  const latestData = extractLatestData(apiResponse);
  if (!latestData) return [];

  const chartData = [];
  let colorIndex = 0;

  // API 응답의 각 필드를 차트 데이터로 변환
  const entries = filterNonTimestampEntries(Object.entries(latestData));

  entries.forEach(([key, value]) => {
    const serverName = extractServerName(key);
    const metricType = extractMetricType(key);
    const displayName = generateEqualizerDisplayName(
      serverName,
      metricType,
      requestSchema
    );

    chartData.push({
      value: roundToTwoDecimals(value),
      label: displayName,
      color: getColorForServer(serverName, colorIndex),
      timestamp: latestData.timestamp,
      serverName: serverName,
      metricType: metricType,
      unit: "PERCENTAGE",
    });

    colorIndex++;
  });

  // 값 기준으로 내림차순 정렬
  return chartData.sort((a, b) => b.value - a.value);
};
