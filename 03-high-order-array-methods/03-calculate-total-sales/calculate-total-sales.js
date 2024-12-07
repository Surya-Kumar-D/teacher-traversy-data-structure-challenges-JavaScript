function calculateTotalSalesWithTax(objArr, tax) {
  const totalPrice = objArr.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  const afterTaxPrice = (totalPrice * tax) / 100 + totalPrice;

  return afterTaxPrice;
}

module.exports = calculateTotalSalesWithTax;
