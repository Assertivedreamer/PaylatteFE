import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreditLimitService {

  private _creditLimitURL =''
  constructor(private _http: HttpClient) { }

  getCreditLimit(){
    return this._http.get(this._creditLimitURL)
  }


  
}
