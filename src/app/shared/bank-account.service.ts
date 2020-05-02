import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  constructor(private http: HttpClient) { }

  postBankAccount(FormData){
   return this.http.post(environment.apiBaseURI+'/BankAccount',FormData);
  }

  getBankAccountList(){
    return this.http.get(environment.apiBaseURI+'/BankAccount');
  }

  putBankAccount(FormData){
    return this.http.put(environment.apiBaseURI+'/BankAccount/'+FormData.bankAccountID,FormData);
   }

   deleteBankAccount(id){
    return this.http.delete(environment.apiBaseURI+'/BankAccount/'+id);
   }
}
