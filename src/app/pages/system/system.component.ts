import { Component } from '@angular/core';
import { AdditionalDataComponent } from '@components/additional-data/additional-data.component';
import { BankAccountsComponent } from '@components/bank-accounts/bank-accounts.component';
import { BreadcrumbComponent } from '@components/breadcrumb/breadcrumb.component';
import { HeaderComponent } from '@components/header/header.component';
import { SystemService } from '@services/system.service';
import { IAdditionalData, IBankAccount, IUserData } from 'app/interfaces';

@Component({
  selector: 'app-system',
  standalone: true,
  imports: [
    HeaderComponent,
    BreadcrumbComponent,
    BankAccountsComponent,
    AdditionalDataComponent
  ],
  templateUrl: './system.component.html',
  styleUrl: './system.component.scss'
})
export class SystemComponent {

  userData?: IUserData;
  bankAccounts: IBankAccount[] = [];
  transactions: any = null;
  additionalData?: IAdditionalData;

  constructor(private systemService: SystemService) {
  }

  ngOnInit(): void {
    this.systemService.getAllData().subscribe(res => {
      this.userData = res.userData as IUserData;
      this.additionalData = res.additionalData as IAdditionalData;
      this.bankAccounts = res.bankAccounts as IBankAccount[];
      this.transactions = res.transactions;
    });
  }

}
