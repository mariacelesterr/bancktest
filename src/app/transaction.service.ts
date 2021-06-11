import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
//import * as data  from '../server/transaction.json'; 
import { Transactions } from './models/transactions.model'

import { Observable } from "rxjs"
import { HttpClient, HttpHeaders } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  
  transactionsObservable!: Observable<Transactions>;

  constructor( private httpClient: HttpClient) { 
    
  }

  getTransactions(){
    this.transactionsObservable = this.httpClient
    .get<Transactions>("http://127.0.0.1:3000/data");
    //console.log(this.transactionsObservable);
    return this.transactionsObservable ;
  
  }
  postTransaction(transaction: string){
    
    this.httpClient.post("http://127.0.0.1:3000/data", transaction, { headers: new HttpHeaders({'Content-Type': 'application/json'})}).subscribe(data => console.log("Transaction is successful" + data),
    error => {
      console.log("Error", error);
    }

    );
  }
}
