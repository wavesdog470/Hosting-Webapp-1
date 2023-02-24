import { Component } from '@angular/core';
import { LoginList } from '../lfile';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = new LoginList('Enter Username', 'Enter Password');
  submitted = false;
  onSubmit() {
    this.submitted = true;
    JSON.stringify(this.user);
  }
}
