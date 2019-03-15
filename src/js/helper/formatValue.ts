/**
 * formats given Value, by rounding it to 2 digits
 * and converting it to stirng
 * @param {number} value
 * @returns {string}
 */
const formatValue = (value: number): string => {
  const roundedValue = Math.round(value * 100) / 100;
  return roundedValue.toLocaleString('de-DE', { minimumFractionDigits: 2 });
};

export default formatValue;
