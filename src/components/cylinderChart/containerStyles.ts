import { STYLE_CONSTANTS } from "./constants.ts";

// 컨테이너 스타일 정의
export const containerStyle = {
  display: "flex",
  flexDirection: "row" as const,
  alignItems: "flex-end" as const,
  height: "100%",
};

export const labelContainerStyle = {
  display: "flex",
  flexDirection: "column" as const,
  height: "100%",
  marginRight: STYLE_CONSTANTS.LABEL_MARGIN_RIGHT,
};

export const circlesContainerStyle = {
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center" as const,
  height: "100%",
};

// 라벨 스타일 생성 함수
export const createLabelStyle = (heightRatio: number, isFirst: boolean) => ({
  height: `${heightRatio * 100}%`,
  textAlign: "center" as const,
  fontSize: STYLE_CONSTANTS.LABEL_FONT_SIZE,
  fontWeight: STYLE_CONSTANTS.LABEL_FONT_WEIGHT,
  color: STYLE_CONSTANTS.LABEL_COLOR,
  width: "1px",
  borderLeft: `${STYLE_CONSTANTS.BORDER_WIDTH} solid ${STYLE_CONSTANTS.BORDER_COLOR}`,
  borderTop: isFirst
    ? `${STYLE_CONSTANTS.BORDER_WIDTH} solid ${STYLE_CONSTANTS.BORDER_COLOR}`
    : "none",
  borderBottom: `${STYLE_CONSTANTS.BORDER_WIDTH} solid ${STYLE_CONSTANTS.BORDER_COLOR}`,
  paddingRight: STYLE_CONSTANTS.LABEL_PADDING_RIGHT,
  position: "relative" as const,
});

// 라벨 텍스트 스타일
export const labelTextStyle = {
  position: "absolute" as const,
  right: STYLE_CONSTANTS.LABEL_POSITION_RIGHT,
  top: "50%",
  transform: "translate(50%, -50%)",
  fontWeight: STYLE_CONSTANTS.LABEL_TEXT_FONT_WEIGHT,
  color: STYLE_CONSTANTS.LABEL_TEXT_COLOR,
  whiteSpace: "nowrap" as const,
  fontSize: STYLE_CONSTANTS.LABEL_TEXT_FONT_SIZE,
};

// 원 그룹 스타일 생성 함수
export const createCircleGroupStyle = (heightRatio: number, color: string) => ({
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center" as const,
  backgroundColor: `${color}${STYLE_CONSTANTS.CIRCLE_BACKGROUND_OPACITY}`,
  height: `${heightRatio * 100}%`,
  maxWidth: STYLE_CONSTANTS.CIRCLE_MAX_WIDTH,
  width: "100%",
  overflow: "hidden" as const,
});
