import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CreditLimitService } from 'src/app/services/credit-limit.service';
import { JarwisService } from 'src/app/services/jarwis.service';
// import { NgxUiLoaderModule, NgxUiLoaderService,SPINNER } from 'ngx-ui-loader';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public crLmtAmt;
  userid: string;
  // sptype:any
  constructor(private _creditLmtService: CreditLimitService,public _js:JarwisService,public loader:NgxUiLoaderService) { 
    this.userid= localStorage.getItem("userid")
    this.fname =    localStorage.getItem("fname")
    this.lname =    localStorage.getItem("lname")

  }
  fname:string
  lname:string 
  totaldue=0
  // tem=[]
  totaldate:string
  
  ngOnInit() {
    this._js.totaldue(this.userid).subscribe(data=>{
      // this.sptype=SPINNER.threeStrings
      this.loader.start()
      this.totaldue=0
      this.totaldue=data
      this.loader.stop()
    },error=>{this.loader.stop()})
    this._js.duedate(this.userid).subscribe(data=>{
      this.loader.start()
      // this.tem=[]
      // this.tem=data
      // this.totaldate=data.b
      this.totaldate=data
        this.loader.stop()
    },error=>{this.loader.stop()})
    this.fname=this.fname
    this.lname=this.lname
    this._creditLmtService.getCreditLimit().subscribe(res => this.crLmtAmt = res)
  }
  paynow()
  {
    
  }

} 
