import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  public form = {
    email:null,
    // password:null,
  };
  constructor(

    private Jarwis: JarwisService,
    private router: Router,

  ) { }



  onSubmit() {
    

    this.Jarwis.requestOtp(this.form).subscribe(
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
    this.router.navigate(['code'])
  }


  ngOnInit(): void {
  }

}
