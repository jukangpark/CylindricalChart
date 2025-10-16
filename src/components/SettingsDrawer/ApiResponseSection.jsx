// API 응답 관련 컴포넌트

import React from "react";
import Editor from "@monaco-editor/react";
import {
  ApiResponseContainer,
  ApiResponseTitle,
  ApiButton,
  LoadingSpinner,
  SuccessStatus,
  ErrorStatus,
  ResponseMonacoContainer,
} from "./SettingsDrawerStyles";

/**
 * API 응답 섹션 컴포넌트
 */
export const ApiResponseSection = ({
  isLoading,
  apiResponse,
  apiError,
  onApiRequest,
}) => {
  return (
    <ApiResponseContainer>
      <ApiResponseTitle>
        API 응답 시뮬레이션
        {isLoading && <LoadingSpinner />}
      </ApiResponseTitle>

      <ApiButton onClick={onApiRequest} disabled={isLoading}>
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
  );
};

