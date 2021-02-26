import { Component } from '@angular/core';

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.template.html',
})

export class HelloworldComponent {
  message = 'I\'m read only';
  canEdit = false;

  onEditClick(): void {
    this.canEdit = !this.canEdit;

    if(this.canEdit) {
      this.message = 'You can edit me';
    }else{
      this.message = 'I\'m read only';
    }
  }

}
