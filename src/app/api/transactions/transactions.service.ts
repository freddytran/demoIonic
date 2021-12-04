import { Injectable } from '@angular/core';
//import { data } from '@waves/waves-transactions';
import * as transactions from '@waves/waves-transactions';


@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor() { }

  addNewDoctor(){
    const seed = 'thisismyprivatewallet';
    // const signedDataTransaction = transactions.data({
    //   "data":[{
    //     "type": "string",
    //     "value": "das ist der erste doctor",
    //     "key": "doctor1"
    //   }]
    // }, seed)
  }
}
