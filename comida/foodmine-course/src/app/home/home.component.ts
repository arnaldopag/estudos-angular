import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  constructor(
    private foodService: FoodService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const searchTerm = params.get('searchTerm');
      const tag = params.get('tag');
      if (searchTerm) {
        this.foods = this.foodService.getAllfoodsBySearchTerm(searchTerm);
      } else if (tag) {
        this.foods = this.foodService.getAllFoodsByTag(tag);
      } else {
        this.foods = this.foodService.getAll();
      }
    });
  }
}
