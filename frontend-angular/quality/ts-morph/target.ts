export class OrderService {
  calculateTotal(price: number, quantity: number): number {
    return price * quantity;
  }
}
