import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { RestaurantsService } from '../restaurants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html'
})
export class RestaurantComponent implements OnInit {

  @Input() restaurant: Restaurant;

  constructor(private restaurantService: RestaurantsService , private route: ActivatedRoute) {}

  ngOnInit() {
    // this.restaurantService
    //   .restaurants()
    //   .subscribe(restaurants => (this.restaurant = restaurants));

    this.restaurantService.
    restaurantById(this.restaurant.id).
    subscribe(restaurants => this.restaurant = restaurants);
  }
}
