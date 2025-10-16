// JSON 스키마 섹션 컴포넌트

import React from "react";
import Editor from "@monaco-editor/react";
import {
  JsonSchemaContainer,
  JsonSchemaTitle,
  MonacoContainer,
} from "./SettingsDrawerStyles";

/**
 * JSON 스키마 섹션 컴포넌트
 */
export const JsonSchemaSection = ({ jsonSchema }) => {
  return (
    <JsonSchemaContainer>
      <JsonSchemaTitle>생성된 JSON 스키마</JsonSchemaTitle>
      <MonacoContainer>
        <Editor
          height="100%"
          defaultLanguage="json"
          value={JSON.stringify(jsonSchema, null, 2)}
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
  );
};

