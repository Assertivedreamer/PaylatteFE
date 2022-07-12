import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JarwisService } from 'src/app/services/jarwis.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {
  public form = {
    email:null,
    otp:null,
    // password:null,
  };
  constructor(private Jarwis: JarwisService,
    private router: Router,
) { }

  ngOnInit(): void {
  }
  onSubmit() {
    

    this.Jarwis.verifyOtp(this.form).subscribe(
      data => this.handleResponse(data),

    );
    // $("#otpmodal").modal('show')
    
   
    
  }
  handleResponse(data) {
    // this.Token.handle(data.access_token);
    // this.router.navigateByUrl('/login');
    alert('Otp Verified Successfully');
    this.router.navigate(['login'])
  }


}
