import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { LoginTelaComponent } from './pages/login-tela/login-tela.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, TasksComponent, LoginTelaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'To-doList';
}
