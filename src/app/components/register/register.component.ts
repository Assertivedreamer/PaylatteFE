import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup} from '@angular/forms';

declare var $:any
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public otp:string
  public value:any
  // public form1 : {
  //   otp1:null
  // }

  public id:string
  public email1:string
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
  // studentform: any;
  studentform:string;


  constructor(
    private Jarwis: JarwisService,
    private router: Router
  ) { }

  onSubmit() {
    

    this.Jarwis.signup(this.form).subscribe(
      data => this.handleResponse(data),
    );
    // $("#otpmodal").modal('show')
    
   
    
  }

  // onSubmit1() {
    
  //   // console.log(this.otp1);
  //   this.Jarwis.requestOtp(this.form1).subscribe(
  //     data => this.handleResponse(data),
  //   );
  //   alert('work');
    
   
    
  // }



  handleResponse(data) {
    // this.Token.handle(data.access_token);
    // this.router.navigateByUrl('/login');
    this.router.navigate(['em'])
  }

  
  // handleError(error) {
  //   this.error = error.error.errors;
  // }
  // otpval()
  // {
  //   this.Jarwis.verifyOtp(this.id,this.otp).subscribe(
  //     data =>this.handleResponse(data),
  //   );

  
  otpval1()
  {
    this.Jarwis.requestOtp(this.studentform.valueOf).subscribe(
      data => this.handleResponse(data),
    );
    alert('work');

  }
  ngOnInit() {
  }

}


