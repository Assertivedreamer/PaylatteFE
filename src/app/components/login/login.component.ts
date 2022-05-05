

import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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

      },
      error => {
        if(error.status==401)
        {
          console.log("ele")
           this.errorlogin=1
        }
      },
    );
  }

  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/dashboard');
  }

 
  ngOnInit() {
    this.errorlogin=0
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
