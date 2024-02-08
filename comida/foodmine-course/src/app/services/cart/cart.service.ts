import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Food } from 'src/app/shared/models/Food';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = new Cart();

  addToCart(food: Food) {
    const item = this.cart.items.find((item) => item.food.id === food.id);
    if (item) {
      this.chageQuantity(food.id, item.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(food));
  }

  removeFromCart(foodId: number) {
    this.cart.items = this.cart.items.filter((item) => item.food.id !== foodId);
  }

  chageQuantity(foodId: number, quantity: number) {
    const item = this.cart.items.find((item) => item.food.id === foodId);
    if (!item) {
      return;
    }
    item.quantity = quantity;
  }

  getCart(): Cart{
    return this.cart;
  }
}
