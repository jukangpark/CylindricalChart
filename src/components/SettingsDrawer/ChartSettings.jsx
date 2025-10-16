// 차트별 설정 컴포넌트들

import React from "react";
import {
  SettingGroup,
  SettingLabel,
  Select,
  NumberInput,
  AutoRotationInfo,
} from "./SettingsDrawerStyles";
import {
  getViewCountOptions,
  getRotationTimeOptions,
  getDataConditionTypeOptions,
  getInDataOptions,
  getOutDataOptions,
  getMaxValueSetTypeOptions,
  getRotationTimeInMs,
  isAutoRotationEnabled,
} from "./settingsOptions";

/**
 * 실린더 차트 설정 컴포넌트
 */
export const CylinderChartSettings = ({
  localSettings,
  handleSettingChange,
}) => {
  return (
    <>
      <SettingGroup>
        <SettingLabel>표시할 실린더 개수</SettingLabel>
        <Select
          value={localSettings.viewCount || "AUTO"}
          onChange={(e) => handleSettingChange("viewCount", e.target.value)}
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
          onChange={(e) => handleSettingChange("rotationTime", e.target.value)}
        >
          {getRotationTimeOptions().map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
        {isAutoRotationEnabled(localSettings.rotationTime) && (
          <AutoRotationInfo>
            자동 페이지 전환이 활성화되었습니다.
            {getRotationTimeInMs(localSettings.rotationTime) / 1000}
            초마다 다음 페이지로 이동합니다.
          </AutoRotationInfo>
        )}
      </SettingGroup>
    </>
  );
};

/**
 * 이퀄라이저 차트 설정 컴포넌트
 */
export const EqualizerChartSettings = ({
  localSettings,
  handleSettingChange,
}) => {
  return (
    <>
      <SettingGroup>
        <SettingLabel>표시 개수</SettingLabel>
        <Select
          value={localSettings.viewCount || "TEN"}
          onChange={(e) => handleSettingChange("viewCount", e.target.value)}
        >
          {getViewCountOptions().map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </SettingGroup>

      <SettingGroup>
        <SettingLabel>로테이션 주기</SettingLabel>
        <Select
          value={localSettings.rotationTime || "SEC_10"}
          onChange={(e) => handleSettingChange("rotationTime", e.target.value)}
        >
          {getRotationTimeOptions().map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
        {isAutoRotationEnabled(localSettings.rotationTime) && (
          <AutoRotationInfo>
            자동 페이지 전환이 활성화되었습니다.
            {getRotationTimeInMs(localSettings.rotationTime) / 1000}
            초마다 다음 페이지로 이동합니다.
          </AutoRotationInfo>
        )}
      </SettingGroup>

      <SettingGroup>
        <SettingLabel>Y축 최대값</SettingLabel>
        <Select
          value={localSettings.maxValueSetType || "AUTO"}
          onChange={(e) =>
            handleSettingChange("maxValueSetType", e.target.value)
          }
        >
          {getMaxValueSetTypeOptions().map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
        {localSettings.maxValueSetType === "MANUAL" && (
          <div style={{ marginTop: "8px" }}>
            <NumberInput
              type="number"
              value={localSettings.max || 100}
              onChange={(e) =>
                handleSettingChange("max", parseInt(e.target.value) || 100)
              }
              placeholder="최대값 입력"
            />
          </div>
        )}
      </SettingGroup>

      <SettingGroup>
        <SettingLabel>
          <input
            type="checkbox"
            checked={
              localSettings.useViewSum !== undefined
                ? localSettings.useViewSum
                : true
            }
            onChange={(e) =>
              handleSettingChange("useViewSum", e.target.checked)
            }
            style={{ marginRight: "8px" }}
          />
          합산 값 표시
        </SettingLabel>
      </SettingGroup>
    </>
  );
};

/**
 * 공통 데이터 설정 컴포넌트 (실린더, 스피드 차트용)
 */
export const CommonDataSettings = ({ localSettings, handleSettingChange }) => {
  return (
    <>
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
    </>
  );
};

