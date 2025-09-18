const getCircleColor = (
  currentValue: number,
  thresholdArray: Array<{ value: number; color: string }>,
  defaultColor: string
) => {
  // 첫 번째 범위: 0 ~ thresholdArray[0]
  if (currentValue <= thresholdArray[0].value) {
    return thresholdArray[0].color;
  }

  // 중간 범위들: thresholdArray[i-1] ~ thresholdArray[i]
  for (let i = 1; i < thresholdArray.length; i++) {
    if (
      currentValue > thresholdArray[i - 1].value &&
      currentValue <= thresholdArray[i].value
    ) {
      return thresholdArray[i].color;
    }
  }

  // 마지막 범위: thresholdArray[마지막] ~ 무한대
  return thresholdArray[thresholdArray.length - 1].color;
};

export default getCircleColor;
