import { CartItem } from './CartItem';
export class Cart {
    
  items: CartItem[] = [];
  get totalPrice(): number {
    return this.items.reduce((acc, item) => acc + item.price, 0);
  }
}
