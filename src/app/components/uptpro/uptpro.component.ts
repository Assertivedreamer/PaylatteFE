import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JarwisService } from 'src/app/services/jarwis.service';
import { NgxUiLoaderModule, NgxUiLoaderService,SPINNER } from 'ngx-ui-loader';
@Component({
  selector: 'app-uptpro',
  templateUrl: './uptpro.component.html',
  styleUrls: ['./uptpro.component.css']
})
export class UptproComponent implements OnInit {
  [x: string]: any;
  details:FormGroup;
  sptype:any
  userid:string;
  email:string;
  mobile:string;
  fname:string;
  lname:string;



  constructor(public _fb:FormBuilder,public _js:JarwisService,public loader:NgxUiLoaderService) {this.userid= localStorage.getItem("userid")
    this.fname =    localStorage.getItem("fname")
    this.lname =    localStorage.getItem("lname")
    this.email =    localStorage.getItem("email")
    this.mobile =    localStorage.getItem("mobile")

}

  ngOnInit(): void {
    this.sptype=SPINNER.threeStrings
    this.loader.start();
    this.details=this._fb.group({
      
      mobile:(''),
      fname:(''),
      email:(''),
      lname:(''),
      // passwod:(''),
     
    })
    this.loader.stop();
    this.details.patchValue({fname:this.fname,mobile:this.mobile,email:this.email,lname:this.lname})
  }
  
}
