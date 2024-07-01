import { Component } from '@angular/core';

@Component({
  selector: 'app-template-test',
  standalone: true,
  imports: [],
  template: `<h1>This is renderd from template property</h1>`,
  styleUrl: './template-test.component.css'
})
export class TemplateTestComponent {

}
