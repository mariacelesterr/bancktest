import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service'

import { OrderPipe } from 'ngx-order-pipe'

@Component({
  selector: 'app-transfer-list',
  templateUrl: './transfer-list.component.html',
  styleUrls: ['./transfer-list.component.css']
})
export class TransferListComponent implements OnInit {

  transactions: any = [];
  searchText: any;
  sortTransactions: any = [];
  order: string = '';
  reverse: boolean = false;

  constructor( private _service : TransactionService, private orderPipe: OrderPipe) { 
    
 
  }

  public ngOnInit(): void {
    this._service.getTransactions().subscribe(
      data => {
        console.log(data)
        this.transactions = data;
        console.log(this.transactions);
      });

  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }

}
