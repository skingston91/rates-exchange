export const calculateTransaction = (convertValue, convertRate, divide) => {
  const parsedConvertValue = parseFloat(convertValue) || 0;
  if (divide) return parsedConvertValue / convertRate;
  return parsedConvertValue * convertRate;
};

export const roundNumberTo2Dp = number => {
  return Math.round(number * 100) / 100;
};
