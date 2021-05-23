import { Component, OnInit } from '@angular/core';
import ITask from 'src/app/itask';
import { TaskServiceService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: ITask[];

  constructor(private taskService: TaskServiceService) { 
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tsks) => {
      this.tasks = tsks
    })
  }

  deleteTask(task: ITask) {
    this.taskService.deleteTask(task).subscribe(() => {
      console.log('Deleted')
    })
  }

}