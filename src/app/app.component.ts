import { Component } from '@angular/core';
import { MainComponent } from './main/main.component'
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, MainComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-project';
  heading = 'Welcome to Angular';
}
