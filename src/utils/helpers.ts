export const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value) + " RWF";
