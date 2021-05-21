import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  template: `
    <div>
      <ul>
        <li *ngFor="let name of names" style="list-style: none;">
          <app-user-item [name]="name"></app-user-item>
        </li>
      </ul>
    </div>
  `,
  styles: [
  ]
})
export class UserListComponent implements OnInit {

  names: string[]

  constructor() { 
    this.names = ['Ari', 'Carlos', 'Felipe', 'Nate']
  }

  ngOnInit(): void {
  }

}
