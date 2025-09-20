import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-formlogin',
  imports: [],
  templateUrl: './formlogin.component.html',
  styleUrl: './formlogin.component.css',
})
export class FormloginComponent {
  @Input() type: 'login' | 'register' = 'login';
}
