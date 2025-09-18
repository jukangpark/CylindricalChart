const getCircleColor = (
  currentValue: number,
  thresholdArray: Array<{ value: number; color: string }>,
  defaultColor: string
) => {
  let circleColor = defaultColor; // 기본 색상

  for (let i = 0; i < thresholdArray.length; i++) {
    if (currentValue <= thresholdArray[i].value) {
      circleColor = thresholdArray[i].color;
      break;
    }
  }

  return circleColor;
};

export default getCircleColor;
