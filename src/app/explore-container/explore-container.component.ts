import { Component, OnInit, Input } from '@angular/core';
import { WalletService } from '../api/wallet/wallet.service';
import { TransactionsService } from '../api/transactions/transactions.service';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  constructor(private wallet: WalletService, private transaction: TransactionsService) { }

  ngOnInit() {}

  startWalletCreation(){
    this.wallet.createWallet();
  }

  addDoctorToData(){
    // this.transaction.addNewDoctor();
  }

}
