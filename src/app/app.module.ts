import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import { ModalModule } from '../_modal';

import { AppComponent } from './app.component';
import { TransferComponent } from './transfer/transfer.component';
import { TransferListComponent } from './transfer-list/transfer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TransferComponent,
    TransferListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    OrderModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
