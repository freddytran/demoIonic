import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';
import { WalletService } from '../api/wallet/wallet.service';
import { TransactionsService } from '../api/transactions/transactions.service';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ExploreContainerComponent],
  exports: [ExploreContainerComponent],
  providers:[WalletService, TransactionsService]
})
export class ExploreContainerComponentModule {}
