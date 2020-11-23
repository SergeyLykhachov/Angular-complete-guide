import { Component } from '@angular/core';
import { AuthService } from './auth.component/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'complete-guide';

  constructor(private authService:AuthService) {
    this.authService.autoLogIn();
  }
}
