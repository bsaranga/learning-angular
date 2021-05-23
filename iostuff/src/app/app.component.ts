import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private list: string[] = []

  constructor() {
    this.list = [
      'Apples',
      'Oranges',
      'Blueberries',
      'Bananas',
      'Pineapples',
      'Avocados'
    ]
  }

  getList(): string[] {
    return this.list;
  }
}
