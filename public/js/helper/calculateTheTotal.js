
const precios =[];

export const getTotal = (data) => {
  precios.push([data.cantidad, data.precio]);
  const plus = precios
    .map((value) => {
      return value[0] * value[1];
    })
    .reduce((acc, value) => {
      return acc + value;
    });
  return plus.toFixed(2);
};
