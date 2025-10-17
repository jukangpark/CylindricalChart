import { STYLE_CONSTANTS } from "./constants.ts";

// 컨테이너 스타일 정의
export const containerStyle = {
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center" as const,
};

export const circlesContainerStyle = {
  display: "flex",
  alignItems: "center" as const,
};

export const labelContainerStyle = {
  display: "flex",
  width: "100%",
  marginTop: STYLE_CONSTANTS.LABEL_MARGIN_TOP,
};

// 원 그룹 스타일 생성 함수
export const createCircleGroupStyle = (widthRatio: number, color: string) => ({
  display: "flex",
  alignItems: "center" as const,
  backgroundColor: `${color}${STYLE_CONSTANTS.CIRCLE_BACKGROUND_OPACITY}`,
  width: `${widthRatio * 100}%`,
  maxHeight: STYLE_CONSTANTS.CIRCLE_MAX_HEIGHT,
});

// 라벨 스타일 생성 함수
export const createLabelStyle = (widthRatio: number, isFirst: boolean) => ({
  width: `${widthRatio * 100}%`,
  textAlign: "center" as const,
  fontSize: STYLE_CONSTANTS.LABEL_FONT_SIZE,
  fontWeight: STYLE_CONSTANTS.LABEL_FONT_WEIGHT,
  color: STYLE_CONSTANTS.LABEL_COLOR,
  height: "1px",
  borderBottom: `${STYLE_CONSTANTS.BORDER_WIDTH} solid ${STYLE_CONSTANTS.BORDER_COLOR}`,
  borderLeft: isFirst
    ? `${STYLE_CONSTANTS.BORDER_WIDTH} solid ${STYLE_CONSTANTS.BORDER_COLOR}`
    : "none",
  borderRight: `${STYLE_CONSTANTS.BORDER_WIDTH} solid ${STYLE_CONSTANTS.BORDER_COLOR}`,
  paddingTop: STYLE_CONSTANTS.LABEL_PADDING_TOP,
  position: "relative" as const,
});

// 라벨 텍스트 스타일
export const labelTextStyle = {
  position: "absolute" as const,
  top: STYLE_CONSTANTS.LABEL_POSITION_TOP,
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontWeight: STYLE_CONSTANTS.LABEL_TEXT_FONT_WEIGHT,
  color: STYLE_CONSTANTS.LABEL_TEXT_COLOR,
};
