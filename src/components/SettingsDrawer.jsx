import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Editor from "@monaco-editor/react";
import {
  simulateApiRequest,
  transformRequestSchema,
} from "../services/chartApiService";

const DrawerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2000;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transition: all 0.3s ease;
`;

const DrawerContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 500px;
  height: 100vh;
  background: white;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease;
  z-index: 2001;
  overflow-y: auto;
`;

const DrawerHeader = styled.div`
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f9fa;
`;

const DrawerTitle = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    background: #e0e0e0;
    color: #333;
  }
`;

const DrawerContent = styled.div`
  padding: 24px;
`;

const SettingGroup = styled.div`
  margin-bottom: 32px;
`;

const SettingLabel = styled.label`
  display: block;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  font-size: 0.9rem;
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  background: white;
  cursor: pointer;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const AutoRotationInfo = styled.div`
  background: #e8f4fd;
  border: 1px solid #b3d9ff;
  border-radius: 8px;
  padding: 12px;
  margin-top: 12px;
  font-size: 0.85rem;
  color: #0066cc;
`;

const JsonSchemaContainer = styled.div`
  margin-top: 24px;
`;

const JsonSchemaTitle = styled.h3`
  margin: 0 0 12px 0;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
`;

const MonacoContainer = styled.div`
  height: 500px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
`;

const ApiResponseContainer = styled.div`
  margin-top: 24px;
`;

const ApiResponseTitle = styled.h3`
  margin: 0 0 12px 0;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ApiButton = styled.button`
  background: #667eea;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 16px;

  &:hover:not(:disabled) {
    background: #5a6fd8;
    transform: translateY(-1px);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const ResponseStatus = styled.div`
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SuccessStatus = styled(ResponseStatus)`
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
`;

const ErrorStatus = styled(ResponseStatus)`
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
`;

const ResponseMonacoContainer = styled.div`
  height: 400px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  margin-top: 12px;
`;

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

  const handleSettingChange = (key, value) => {
    const newSettings = { ...localSettings, [key]: value };
    setLocalSettings(newSettings);
    onSettingsChange(newSettings);
  };

  const getViewCountOptions = () => {
    return [
      { value: "AUTO", label: "자동" },
      { value: "FIVE", label: "5개" },
      { value: "TEN", label: "10개" },
      { value: "TWENTY", label: "20개" },
    ];
  };

  const getRotationTimeOptions = () => {
    return [
      { value: "AUTO", label: "자동" },
      { value: "SEC_10", label: "10초" },
      { value: "SEC_30", label: "30초" },
      { value: "MIN_1", label: "1분" },
    ];
  };

  const getDataConditionTypeOptions = () => {
    return [
      { value: "INDIVIDUAL", label: "개별" },
      { value: "ALL", label: "전체" },
    ];
  };

  const getInDataOptions = () => {
    return [
      { value: "none", label: "사용 안함" },
      { value: "cpu", label: "CPU 사용률" },
      { value: "memory", label: "메모리 사용률" },
      { value: "disk", label: "디스크 사용률" },
      { value: "network", label: "네트워크 사용률" },
    ];
  };

  const getOutDataOptions = () => {
    return [
      { value: "none", label: "사용 안함" },
      { value: "cpu", label: "CPU 사용률" },
      { value: "memory", label: "메모리 사용률" },
      { value: "disk", label: "디스크 사용률" },
      { value: "network", label: "네트워크 사용률" },
    ];
  };

  const getRotationTimeInMs = (rotationTime) => {
    switch (rotationTime) {
      case "SEC_10":
        return 10000;
      case "SEC_30":
        return 30000;
      case "MIN_1":
        return 60000;
      default:
        return null;
    }
  };

  const isAutoRotationEnabled = localSettings.rotationTime !== "AUTO";

  // API 호출 함수
  const handleApiRequest = async () => {
    try {
      setIsLoading(true);
      setApiError(null);
      setApiResponse(null);

      const requestSchema = generateJsonSchema();
      const transformedSchema = transformRequestSchema(requestSchema);

      const response = await simulateApiRequest(transformedSchema);
      setApiResponse(response);

      // API 요청 성공 시 차트 데이터 업데이트
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

  const generateJsonSchema = () => {
    const baseSchema = {
      visualization:
        chartType === "cylinder" ? "CYLINDER_CHART" : "SPEED_CHART",
      dataConditionType: localSettings.dataConditionType || "INDIVIDUAL",
    };

    // 실린더 차트 전용 설정
    if (chartType === "cylinder") {
      baseSchema.viewCount = localSettings.viewCount || "AUTO";
      baseSchema.rotationTime = localSettings.rotationTime || "AUTO";
    }

    // InData 설정
    if (localSettings.inData && localSettings.inData !== "none") {
      baseSchema.inData = {
        definition: {
          id: `server.${
            localSettings.inData.charAt(0).toUpperCase() +
            localSettings.inData.slice(1)
          }_Utilization`,
          resourceType: `server.${
            localSettings.inData.charAt(0).toUpperCase() +
            localSettings.inData.slice(1)
          }`,
          name: "Utilization",
          displayName: `${
            localSettings.inData.charAt(0).toUpperCase() +
            localSettings.inData.slice(1)
          } 사용률`,
          displayKey: `sms.${localSettings.inData}_utilization`,
          alias: "U",
          units: "PERCENTAGE",
          measurementType: "METRIC",
          numericType: "DYNAMIC",
          deleted: false,
          protocolInfo: "4.3.24.0",
          osType: "ALL",
        },
        tagFilters: [],
        metricValueTypes: ["avg"],
        groupBys: [],
        limitCount: "",
      };
    }

    // OutData 설정
    if (localSettings.outData && localSettings.outData !== "none") {
      baseSchema.outData = {
        definition: {
          id: `server.${
            localSettings.outData.charAt(0).toUpperCase() +
            localSettings.outData.slice(1)
          }_Utilization`,
          resourceType: `server.${
            localSettings.outData.charAt(0).toUpperCase() +
            localSettings.outData.slice(1)
          }`,
          name: "Utilization",
          displayName: `${
            localSettings.outData.charAt(0).toUpperCase() +
            localSettings.outData.slice(1)
          } 사용률`,
          displayKey: `sms.${localSettings.outData}_utilization`,
          alias: "U",
          units: "PERCENTAGE",
          measurementType: "METRIC",
          numericType: "DYNAMIC",
          deleted: false,
          protocolInfo: "4.4.5.0",
          osType: "ALL",
        },
        tagFilters: [],
        metricValueTypes: ["max"],
        groupBys: [],
        limitCount: "",
      };
    }

    // DataCondition (기본 설정)
    if (!localSettings.inData || localSettings.inData === "none") {
      baseSchema.dataCondition = {
        metricData: [
          {
            definition: {
              id: "server.Cpu_Utilization",
              resourceType: "server.Cpu",
              name: "Utilization",
              displayName: "CPU 사용률",
              displayKey: "sms.cpu_utilization",
              alias: "U",
              units: "PERCENTAGE",
              measurementType: "METRIC",
              numericType: "DYNAMIC",
              deleted: false,
              protocolInfo: "4.3.24.0",
              osType: "ALL",
            },
            tagFilters: [],
            metricValueTypes: ["avg"],
            groupBys: [],
            limitCount: "",
          },
        ],
        metricCalculation: "NONE",
        mode: "NOW",
        startTime: Date.now() - 3600000, // 1시간 전
        endTime: Date.now(),
        interval: 0,
      };
    }

    return baseSchema;
  };

  return (
    <>
      <DrawerOverlay isOpen={isOpen} onClick={onClose} />
      <DrawerContainer isOpen={isOpen}>
        <DrawerHeader>
          <DrawerTitle>
            {chartType === "cylinder" ? "실린더 차트" : "스피드 차트"} 설정
          </DrawerTitle>
          <CloseButton onClick={onClose}>×</CloseButton>
        </DrawerHeader>

        <DrawerContent>
          {chartType === "cylinder" && (
            <>
              <SettingGroup>
                <SettingLabel>표시할 실린더 개수</SettingLabel>
                <Select
                  value={localSettings.viewCount || "AUTO"}
                  onChange={(e) =>
                    handleSettingChange("viewCount", e.target.value)
                  }
                >
                  {getViewCountOptions().map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>
              </SettingGroup>

              <SettingGroup>
                <SettingLabel>데이터 회전 주기</SettingLabel>
                <Select
                  value={localSettings.rotationTime || "AUTO"}
                  onChange={(e) =>
                    handleSettingChange("rotationTime", e.target.value)
                  }
                >
                  {getRotationTimeOptions().map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>
                {isAutoRotationEnabled && (
                  <AutoRotationInfo>
                    자동 페이지 전환이 활성화되었습니다.
                    {getRotationTimeInMs(localSettings.rotationTime) / 1000}
                    초마다 다음 페이지로 이동합니다.
                  </AutoRotationInfo>
                )}
              </SettingGroup>
            </>
          )}

          <SettingGroup>
            <SettingLabel>데이터 조건 타입</SettingLabel>
            <Select
              value={localSettings.dataConditionType || "INDIVIDUAL"}
              onChange={(e) =>
                handleSettingChange("dataConditionType", e.target.value)
              }
            >
              {getDataConditionTypeOptions().map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </SettingGroup>

          <SettingGroup>
            <SettingLabel>인바운드 데이터 (InData)</SettingLabel>
            <Select
              value={localSettings.inData || "none"}
              onChange={(e) => handleSettingChange("inData", e.target.value)}
            >
              {getInDataOptions().map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </SettingGroup>

          <SettingGroup>
            <SettingLabel>아웃바운드 데이터 (OutData)</SettingLabel>
            <Select
              value={localSettings.outData || "none"}
              onChange={(e) => handleSettingChange("outData", e.target.value)}
            >
              {getOutDataOptions().map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </SettingGroup>

          <JsonSchemaContainer>
            <JsonSchemaTitle>생성된 JSON 스키마</JsonSchemaTitle>
            <MonacoContainer>
              <Editor
                height="100%"
                defaultLanguage="json"
                value={JSON.stringify(generateJsonSchema(), null, 2)}
                theme="vs-dark"
                options={{
                  readOnly: true,
                  minimap: { enabled: false },
                  scrollBeyondLastLine: true,
                  fontSize: 12,
                  lineNumbers: "on",
                  wordWrap: "off",
                  automaticLayout: true,
                  padding: { top: 16, bottom: 16 },
                  scrollbar: {
                    vertical: "auto",
                    horizontal: "auto",
                    verticalScrollbarSize: 12,
                    horizontalScrollbarSize: 12,
                  },
                }}
              />
            </MonacoContainer>
          </JsonSchemaContainer>

          <ApiResponseContainer>
            <ApiResponseTitle>
              API 응답 시뮬레이션
              {isLoading && <LoadingSpinner />}
            </ApiResponseTitle>

            <ApiButton onClick={handleApiRequest} disabled={isLoading}>
              {isLoading ? "요청 중..." : "API 요청 시뮬레이션"}
            </ApiButton>

            {apiError && <ErrorStatus>❌ {apiError}</ErrorStatus>}

            {apiResponse && (
              <>
                <SuccessStatus>
                  ✅ API 요청 성공 (
                  {new Date(apiResponse.timestamp).toLocaleTimeString()})
                </SuccessStatus>

                <ResponseMonacoContainer>
                  <Editor
                    height="100%"
                    defaultLanguage="json"
                    value={JSON.stringify(apiResponse, null, 2)}
                    theme="vs-dark"
                    options={{
                      readOnly: true,
                      minimap: { enabled: false },
                      scrollBeyondLastLine: true,
                      fontSize: 11,
                      lineNumbers: "on",
                      wordWrap: "off",
                      automaticLayout: true,
                      padding: { top: 12, bottom: 12 },
                      scrollbar: {
                        vertical: "auto",
                        horizontal: "auto",
                        verticalScrollbarSize: 10,
                        horizontalScrollbarSize: 10,
                      },
                    }}
                  />
                </ResponseMonacoContainer>
              </>
            )}
          </ApiResponseContainer>
        </DrawerContent>
      </DrawerContainer>
    </>
  );
};

export default SettingsDrawer;
