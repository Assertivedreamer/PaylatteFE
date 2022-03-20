import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  public form = {
    email:null,
    password:null,
    confirm_password:null,
  };
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    
  }

}
