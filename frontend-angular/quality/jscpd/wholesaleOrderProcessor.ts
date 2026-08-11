export function processWholesaleOrder(orderId: string, quantity: number, unitPrice: number, discountPct: number) {
  if (quantity <= 0) {
    throw new Error('quantity must be positive');
  }
  const subtotal = quantity * unitPrice;
  const discount = subtotal * (discountPct / 100);
  const total = subtotal - discount;
  const tax = total * 0.08;
  const grandTotal = total + tax;
  return { orderId, subtotal, discount, tax, grandTotal };
}
