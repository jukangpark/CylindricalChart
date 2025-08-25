/** 움직이는 동그라미 관련된 스타일 함수 */
const getDotStyle = (index, totalDots) => {
  const centerIndex = (totalDots - 1) / 2;
  const distanceFromCenter = Math.abs(index - centerIndex);
  const maxDistance = centerIndex;

  // 중앙에서 멀어질수록 투명해지고 밝아짐
  const opacity = 0.3 + 0.7 * (1 - distanceFromCenter / maxDistance);
  const color = `rgba(0, 123, 255, ${opacity})`;

  return { color, opacity };
};

export default getDotStyle;
