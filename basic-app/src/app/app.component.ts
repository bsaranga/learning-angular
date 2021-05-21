import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
        <hello-world></hello-world>
        <app-user-item></app-user-item>
        <app-user-list></app-user-list>
      </h1>
  </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'basic-app';
}
