import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderModule, NgxUiLoaderService,SPINNER } from 'ngx-ui-loader';
import { JarwisService } from 'src/app/services/jarwis.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {
   collapaseflag:any=0
   totaldue1=0
   sptype:any
   userid:string
   fname:string;
  lname:string;
  constructor(public service:JarwisService,public loader:NgxUiLoaderService) { 
    this.userid= localStorage.getItem("userid")
    this.fname =    localStorage.getItem("fname")
    this.lname =    localStorage.getItem("lname")

  }
   temp=[]
  
  //  fname:string
  // lname:string 
  ngOnInit(): void {
    this.sptype=SPINNER.threeStrings

    this.service.totaldue1(this.userid).subscribe(data=>{
      this.loader.start();

      // this.tem=[]
      // this.tem=data
      //  this.totaldue=0
      this.totaldue1=data
      this.loader.stop();
    },error=>{this.loader.stop()})
    console.log(this.service)
    console.log(this.service.userid)
    

    this.service.transaction(this.userid).subscribe(data=>{
      this.temp=[]
      this.temp=data
      this.loader.stop();
    },error=>{this.loader.stop()})
    this.fname=this.fname
    this.lname=this.lname
  }
  collapase()
  {
    
    this.collapaseflag=!this.collapaseflag
  }
}
