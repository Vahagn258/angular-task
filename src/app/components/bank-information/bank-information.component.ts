import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SharedModule } from 'app/shared';

@Component({
  selector: 'app-bank-information',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './bank-information.component.html',
  styleUrl: './bank-information.component.scss'
})
export class BankInformationComponent {

  constructor(translateService: TranslateService) {

  }

}
