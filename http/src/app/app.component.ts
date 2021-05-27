import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  count: number = 0;
  title = 'http';

  ngOnInit() {
    this.initializeCounter();
  }

  initializeCounter():void {
    const secondsCounter = interval(1000);
    secondsCounter.subscribe(n => {
      this.count = n;
    });
  }
}
