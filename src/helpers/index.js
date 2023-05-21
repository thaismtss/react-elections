export function formatNumber(value) {
  if (!value) return '';
  return value.toLocaleString('pt-BR');
}

export function formatPercent(value) {
  const symbol = value > 0 ? '+' : '';

  return symbol + value.toFixed(2).replace('.', ',') + '%';
}
