

import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatCommonModule } from '@angular/material/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // hide: boolean = false;
  password: string = '';
  c_password: string = '';
  toggle1: boolean = false;
  toggle2: boolean = false;

  public form = {
    email:null,
    password:null,
  };

  public error = null;
  public errorlogin = 0;
  
  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    
  ) { }

  onSubmit() {
    this.Jarwis.login(this.form).subscribe(ele => {
       
        this.Jarwis.email=ele.email
        this.Jarwis.fname=ele.fname
        this.Jarwis.lname=ele.lname
        this.Jarwis.mobile=ele.mobile
        this.Jarwis.userid=ele.userid
        this.handleResponse(ele)
        localStorage.setItem("userid", ele.userid)
        localStorage.setItem("fname",ele.fname)
        localStorage.setItem("lname",ele.lname)
        localStorage.setItem("mobile",ele.mobile)
        localStorage.setItem("email",ele.email)
        alert('User successfully loggedin');

      },
      
      error => {
        if(error.status==401)
        {
          console.log("ele")
           this.errorlogin=1
           alert('invalid credentials');

        }

      },
    );
    // alert('User successfully loggedin');

  }

  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/dashboard');
  }

 
  ngOnInit() {
    this.errorlogin=0
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









// import { Component, OnInit } from '@angular/core';
// import {HttpClient} from '@angular/common/http';
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   public form={

//     email:null,
//     password:null,   

//   }
//   public error = null;
//   constructor(private http:HttpClient) { }

//   ngOnInit(): void {
//   }

//   onSubmit() {
//    return this.http.post('http://127.0.0.1:8000/api/admin/login',this.form)
//    .subscribe(
//      data=>console.log(data),
//       error=>console.log(error)
//    );
//   }
//   handleError(error) {
//     this.error = error.error.error;
//   }

// }












// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';




// @Component({
//      selector: 'app-login',
//     templateUrl: './login.component.html',
//     styleUrls: ['./login.component.css']
//   })
//   export class LoginComponent implements OnInit {

//       public form={
//         email:null,
//         password:null
//       }
    
//       constructor() { }
    
//       ngOnInit(): void {
//       }

//       SubmitLogin(): void {
//         console.log(this.form);
//       }


//     }
