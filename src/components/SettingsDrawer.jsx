import React, { useState, useEffect, useMemo } from "react";
import {
  simulateApiRequest,
  transformRequestSchema,
} from "../services/chartApiService";
import { generateJsonSchema } from "../services/requestSchemaUtils";
import {
  DrawerOverlay,
  DrawerContainer,
  DrawerHeader,
  DrawerTitle,
  CloseButton,
  DrawerContent,
} from "./SettingsDrawer/SettingsDrawerStyles";
import {
  CylinderChartSettings,
  EqualizerChartSettings,
  CommonDataSettings,
} from "./SettingsDrawer/ChartSettings";
import { JsonSchemaSection } from "./SettingsDrawer/JsonSchemaSection";
import { ApiResponseSection } from "./SettingsDrawer/ApiResponseSection";

const SettingsDrawer = ({
  isOpen,
  onClose,
  chartType,
  settings,
  onSettingsChange,
  onApiRequest,
}) => {
  const [localSettings, setLocalSettings] = useState(settings);
  const [isLoading, setIsLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    setLocalSettings(settings);
  }, [settings]);

  // ESC 키 이벤트 리스너
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSettingChange = (key, value) => {
    const newSettings = { ...localSettings, [key]: value };
    setLocalSettings(newSettings);
    // 부모 전파 제거 - select 변경 시 로컬만 업데이트
  };

  // API 호출 함수
  const handleApiRequest = async () => {
    try {
      setIsLoading(true);
      setApiError(null);
      setApiResponse(null);

      const requestSchema = generateJsonSchema(localSettings, chartType);
      const transformedSchema = transformRequestSchema(requestSchema);

      const response = await simulateApiRequest(transformedSchema);
      setApiResponse(response);

      // API 요청 성공 시 부모로 settings 전파 및 차트 데이터 업데이트
      if (onSettingsChange) {
        onSettingsChange(localSettings);
      }
      if (onApiRequest) {
        await onApiRequest(localSettings);
      }
    } catch (error) {
      console.error("API 요청 실패:", error);
      setApiError(error.message || "API 요청 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <DrawerOverlay isOpen={isOpen} onClick={onClose} />
      <DrawerContainer isOpen={isOpen}>
        <DrawerHeader>
          <DrawerTitle>
            {chartType === "cylinder"
              ? "실린더 차트"
              : chartType === "equalizer"
              ? "이퀄라이저 차트"
              : "스피드 차트"}{" "}
            설정
          </DrawerTitle>
          <CloseButton onClick={onClose}>×</CloseButton>
        </DrawerHeader>

        <DrawerContent>
          {chartType === "cylinder" && (
            <CylinderChartSettings
              localSettings={localSettings}
              handleSettingChange={handleSettingChange}
            />
          )}

          {chartType === "equalizer" && (
            <EqualizerChartSettings
              localSettings={localSettings}
              handleSettingChange={handleSettingChange}
            />
          )}

          {chartType !== "equalizer" && (
            <CommonDataSettings
              localSettings={localSettings}
              handleSettingChange={handleSettingChange}
            />
          )}

          <JsonSchemaSection
            jsonSchema={useMemo(
              () => generateJsonSchema(localSettings, chartType),
              [localSettings, chartType]
            )}
          />

          <ApiResponseSection
            isLoading={isLoading}
            apiResponse={apiResponse}
            apiError={apiError}
            onApiRequest={handleApiRequest}
          />
        </DrawerContent>
      </DrawerContainer>
    </>
  );
};

export default SettingsDrawer;
