import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``,
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      primaryColor: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      primaryColor: Color.black,
    },
    {
      name: 'Robin',
      canFly: false,
      primaryColor: Color.red,
    },
    {
      name: 'Linterna Verde',
      canFly: true,
      primaryColor: Color.green,
    },
  ];

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }
}
