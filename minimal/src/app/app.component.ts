import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'minimal';
  myName = 'Saranga'
  fontColor = 'blue';
  sayHelloId = 1;
  canClick = false;
  message = 'Hello World';
  sayMessage() {
    alert(this.message)
  }
}