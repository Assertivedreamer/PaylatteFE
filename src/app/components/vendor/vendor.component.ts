import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {



  public form = {
    
    
    name:null,
    
    dob:null,
     
  };

  constructor(
    private Jarwis: JarwisService,
    private router: Router
  ) { }



  onSubmit() {
   this.Jarwis.repay(this.form).subscribe(
     data => this.handleResponse(data),
   );
 }
 handleResponse(data) {
   // this.Token.handle(data.access_token);
   // this.router.navigateByUrl('/login');
   this.router.navigate(['Bills'])
 }

  ngOnInit(): void {
  }

}
