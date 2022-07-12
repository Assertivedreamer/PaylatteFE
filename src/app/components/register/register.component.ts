import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, NgForm} from '@angular/forms';

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
  password: string = '';
  c_password: string = '';
  toggle1: boolean = false;
  toggle2: boolean = false;


  public isFormSubmitted: boolean = false;
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

  // onSubmit(myForm: NgForm) {
  //   if(myForm.invalid){
  //     return;
  //   }

  //   this.Jarwis.signup(this.form).subscribe(
  //     data => this.handleResponse(data),
  //   );
    
    
  //   alert('User successfully signedin');

    
    
  // }

  onSubmit(myForm: NgForm) {
    if(myForm.invalid){
      return;
    }
    this.Jarwis.signup(this.form) 
     .subscribe({
      next:(data)=>{
         this.handleResponse(data);
                alert("signup successfully");
  
                    },
      error:(error)=>{
        console.log(error.error);
        alert("email or user already exist")
      }
    })
  
  }


  





  



  handleResponse(data) {
    // this.Token.handle(data.access_token);
    // this.router.navigateByUrl('/login');
    this.router.navigate(['em'])
  }

  
  

  
  otpval1()
  {
    this.Jarwis.requestOtp(this.studentform.valueOf).subscribe(
      data => this.handleResponse(data),
    );
    alert('work');

  }
  ngOnInit() {
  }
  changeType(input_field_password, num){
    if(input_field_password.type=="password")
      input_field_password.type = "text";
    else
      input_field_password.type = "password";

    if(num == 1)
      this.toggle1 = !this.toggle1;
    else
      this.toggle2 = !this.toggle2;
  }


}


