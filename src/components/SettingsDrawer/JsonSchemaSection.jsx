// JSON 스키마 섹션 컴포넌트

import React, { useMemo } from "react";
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
  const jsonString = useMemo(
    () => JSON.stringify(jsonSchema, null, 2),
    [jsonSchema]
  );

  return (
    <JsonSchemaContainer>
      <JsonSchemaTitle>생성된 JSON 스키마</JsonSchemaTitle>
      <MonacoContainer>
        <Editor
          height="500px"
          defaultLanguage="json"
          value={jsonString}
          theme="vs-dark"
          options={{
            readOnly: true,
            minimap: { enabled: false },
            scrollBeyondLastLine: true,
            fontSize: 12,
            lineNumbers: "on",
            wordWrap: "off",
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
