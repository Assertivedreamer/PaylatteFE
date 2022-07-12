import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import { Observable } from 'rxjs';
// import {Observable, Subject} from 'rxjs';

@Injectable()
export class JarwisService {
   private baseUrl = 'http://127.0.0.1:8000/';
   public fname: string;
   public lname: string;
   public mobile: string;
   public email: string;
   public userid:string;
  constructor(private http: HttpClient) { }

 

  signup(data) {
    return this.http.post(`${this.baseUrl}api/admin/signup`,data)
  }
  repay(data) {
    return this.http.post(`${this.baseUrl}api/repayments`,data)
  }
  login(data):Observable<any> {
    console.log
    return this.http.post(`${this.baseUrl}api/admin/login`,data)
  }
  transaction(userid):Observable<any>{
    console.log(userid);
    return this.http.get(`${this.baseUrl}api/transactions/users/${userid}`)
  }

  // ${id}
  totaldue(userid):Observable<any>
  {
    console.log(userid);
    return this.http.get(`${this.baseUrl}api/transactionBill/users/${userid}`)
  }
  duedate(userid):Observable<any>
  {
    console.log(userid);
    return this.http.get(`${this.baseUrl}api/transactionBilldate/users/${userid}`)
  }
  paynow():Observable<any>{
    return this.http.get(`${this.baseUrl}api/`)
  }
  totaldue1(userid):Observable<any>{
    return this.http.get(`${this.baseUrl}api/totaldueamount/users/${userid}`)
  }
  
  requestOtp(data: any):Observable<any>{
    return this.http.post<any>("http://localhost:8000/api/otp_request",data)
  }

  verifyOtp(data: any):Observable<any>{
    return this.http.post(`${this.baseUrl}api/verify_otp/`,data);
  }

  sendPasswordResetLink(data) {
    return this.http.post(`${this.baseUrl}api/admin/sendPasswordResetLink`, data)
  }
  
  changePassword(data) {
    return this.http.post(`${this.baseUrl}api/admin/resetPassword`, data)
  }


}


//in which file want data? yes.?