export const calculateTransaction = (convertValue, convertRate, divide) => {
  if (divide) return convertValue / convertRate;
  return convertValue * convertRate;
};
