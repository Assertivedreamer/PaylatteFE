import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public form = {
    name:null,
    last_name:null,
     phone_number:null,
     email:null,
     password:null,
     confirm_password:null,
     dob:null,
     aadhar:null,
     pancard:null,
     address:null,
  };
  public error = [];

  constructor(
    private Jarwis: JarwisService,
    private router: Router
  ) { }

  onSubmit() {
    this.Jarwis.signup(this.form).subscribe(
      data => this.handleResponse(data),
    );
  }
  handleResponse(data) {
    // this.Token.handle(data.access_token);
    this.router.navigateByUrl('/login');
  }

  // handleError(error) {
  //   this.error = error.error.errors;
  // }

  ngOnInit() {
  }

}
