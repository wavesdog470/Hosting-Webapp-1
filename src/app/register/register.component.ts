import { Component } from '@angular/core';
import { RegisterList } from '../lfile';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = new RegisterList('Enter Email', 'Enter Username', 'Enter Password');
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }
}
