import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ModalService } from '../../_modal'


import { TransactionService } from '../transaction.service'

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  verify = true;
  balance = 5824.76;
  _localStorage : any;
  transaction = {
    categoryCode: "#12a580",
    dates: {
          valueDate: "2015-03-02",
        },
    transaction: {
      amountCurrency: {
        amount: "5824.76",
        currencyCode: "EUR"
      },
      type: "Online Transfer",
      creditDebitIndicator: "CRDT"
        },
    merchant: {
      name: "Georgia Power Electric Company",
      accountNumber: "SI64397745065188826"
    },
    icon:"georgia-power.jpg"

  }

  form = new FormGroup ({
    fromAccount : new FormControl ({value: `Free Checking(4292) - $${this.balance}`, disabled: true}),
    toAccount: new FormControl({value: 'Georgia Power Electric Company', disabled: true}),
    amount:  new FormControl('$0.00',[Validators.required, Validators.minLength(3)] )

  });

  constructor(private _service: TransactionService, private modalService: ModalService) { }

  ngOnInit(): void {
    this._localStorage = localStorage.getItem('balance');
    if(this._localStorage != null){
      this.balance = parseInt(this._localStorage);
    }

  }

  openModal(id: string) {
    let result: any;
    result = this.balance - this.form.controls.amount.value;
      if(result === -500 || result < -500 ){
       alert("You can't overdraft your account balance");
      }
      else{
        this.modalService.open(id);
        this.transaction.transaction.amountCurrency.amount = this.form.controls.amount.value;
      }
  }

  closeModal(id: string) {
    this.modalService.close(id);
    this.form.controls.amount.setValue('$ 0.00');
  }
  submit(){

      this.balance = this.balance - this.form.controls.amount.value;
      localStorage.setItem( 'balance', this.balance.toString());
      var nowDate = new Date(); 
      var date = nowDate.getFullYear()+'-'+(nowDate.getMonth()+1)+'-'+nowDate.getDate();
      this.transaction.dates.valueDate = date;
  
      let newJson = JSON.stringify(this.transaction);
      this._service.postTransaction(newJson)
      location.reload();
      this.closeModal('custom-modal-1');    
  }
}
