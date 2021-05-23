import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import ITask from 'src/app/itask';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  
  @Input() task: ITask;
  @Output() onDeleteTask: EventEmitter<ITask>

  constructor() { 
    this.onDeleteTask = new EventEmitter()
  }

  ngOnInit(): void {
  }

  onDelete(task) {
    this.onDeleteTask.emit(task);
  }

}
