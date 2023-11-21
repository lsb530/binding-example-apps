import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  count: number
  text: string
  constructor() {
    this.count = 0
    this.text = ''
  }

  addCounter() {
    this.count += 1
  }
}
