export function formatUsdToUzs(priceUsd: number, USD_TO_UZS: number): string {
  const uzs = priceUsd * USD_TO_UZS;
  const formatted = Math.round(uzs).toLocaleString("ru-RU");
  return formatted;
}
