

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

  
  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    
  ) { }

  onSubmit() {
    this.Jarwis.login(this.form).subscribe(
      data => this.handleResponse(data),
      // error => this.handleError(error),
    );
  }

  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/dashboard');
  }

 
  ngOnInit() {
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
