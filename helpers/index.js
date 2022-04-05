export const quantityFormatting = (cantidad) => {
  return cantidad.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
  });
};
