import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from './task-service.service';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITaskData } from './ITaskData';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  count: number = 0;
  title = 'http';
  taskData: any = [];

  constructor(private taskService : TaskServiceService) {

  }

  ngOnInit() {
    this.initializeCounter();
    this.taskService.getTasks().subscribe((data) => {this.taskData = data});
  }

  initializeCounter():void {
    const secondsCounter = interval(1000);
    const cubedVals = map((val: number) => Math.pow(val, 3));
    const cubedCounter = cubedVals(secondsCounter);

    const sub = cubedCounter.subscribe(n => {
      this.count = n;
    });

    setTimeout(() => {
      sub.unsubscribe();
    }, 5000);
  }
}
