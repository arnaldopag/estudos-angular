import { Component, OnInit } from '@angular/core';
import { Food } from '../shared/models/Food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css'],
})
export class FoodPageComponent implements OnInit {
  food!: Food;
  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService,
    private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.food = this.foodService.getFoodById(id);
    });
  }

 addToCart() {  
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
 }



  ngOnInit(): void {}
}
