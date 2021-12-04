import { Injectable } from '@angular/core';
import * as libCrypto from  '@waves/ts-lib-crypto'

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor() { }

  createWallet(){
    const seed = 'thisismyprivatewallet';
    const sk = libCrypto.privateKey(seed);
    const pk = libCrypto.publicKey(seed);
    const addressBase58 = libCrypto.address(seed, 'T');
    console.log(addressBase58);
  }
}
