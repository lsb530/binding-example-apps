import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  count: number
  text: string
  look: string
  constructor() {
    this.count = 0
    this.text = ''
    this.look = 'Not handsome'
  }

  lookStyle() {
    return this.look === 'Not handsome' ? 'yellow' : 'green'
  }

  addCounter() {
    this.count += 1
  }

  changeLook() {
    this.look = 'handsome'
  }
}
