import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { merge } from 'rxjs';
import { FormloginComponent } from '../../components/formlogin/formlogin.component';

@Component({
  selector: 'app-login-tela',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormloginComponent,
  ],
  templateUrl: './login-tela.component.html',
  styleUrl: './login-tela.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginTelaComponent {
  imagePath =
    'https://raw.githubusercontent.com/mateusfrazz/landing-page-newslatter/refs/heads/main/images/roxo.png';
}
