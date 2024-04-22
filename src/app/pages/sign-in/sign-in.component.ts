import { Component } from '@angular/core';
import { BankInformationComponent } from '@components/bank-information/bank-information.component';
import { SignInFormComponent } from '@components/sign-in-form/sign-in-form.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    BankInformationComponent,
    SignInFormComponent
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

}
