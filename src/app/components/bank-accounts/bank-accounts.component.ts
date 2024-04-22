import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IBankAccount } from 'app/interfaces';
import { SharedModule } from 'app/shared';

@Component({
  selector: 'app-bank-accounts',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './bank-accounts.component.html',
  styleUrl: './bank-accounts.component.scss'
})
export class BankAccountsComponent implements OnChanges {

  @Input() bankAccounts: IBankAccount[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (this.bankAccounts.length) {
      this.bankAccounts = this.bankAccounts.map(account => {
        account.showAccountNumber = false;
        account.showBalance = false;
        account.accountNumber = this.padAccountNumberWithRandom(account.accountNumber);
        return account;
      })
    }
  }

  onSearch(evt: any) {
    // Handle search logic
  }

  toggleAccountNumber(account: IBankAccount): void {
    account.showAccountNumber = !account.showAccountNumber;
  }

  toggleBalance(account: IBankAccount): void {
    account.showBalance = !account.showBalance;
  }

  padAccountNumberWithRandom(accountNumber: string): string {
    if (accountNumber.length >= 12) {
      return accountNumber.slice(0, 12);
    }
    const missingChars = 12 - accountNumber.length;
    const randomNumbers = Array.from({ length: missingChars }, () => Math.floor(Math.random() * 10));
    const paddedNumber = accountNumber + randomNumbers.join('');
    return paddedNumber;
  }

  maskAccountNumber(accountNumber: string): string {
    const firstPart = accountNumber.slice(0, 4);
    const lastPart = accountNumber.slice(-4);
    const numAsterisks = accountNumber.length - 8;
    const asterisks = '*'.repeat(numAsterisks);
    const maskedString = firstPart + ' ' + asterisks + ' ' + lastPart;
    return maskedString;
  }

}
