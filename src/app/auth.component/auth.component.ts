import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth.component',
  templateUrl: './auth.component..html',
  styleUrls: ['./auth.component..css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSwitchMode(form: NgForm): void {
    this.isLoginMode = !this.isLoginMode;
    form.reset();
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.error = null;
      this.isLoading = true;
      let authObs: Observable<AuthResponseData>;
      if (this.isLoginMode) {
        authObs = this.authService.login(form.value.email, form.value.password);
      } else {
        authObs = this.authService.signUp(form.value.email, form.value.password);
      }
      authObs.subscribe(
        response => {
          this.isLoading = false;
          this.router.navigate(['/recipes']);
        },
        error => {
          this.error = error;
          this.isLoading = false;
        }
      );
      form.reset();
    }
  }

}
