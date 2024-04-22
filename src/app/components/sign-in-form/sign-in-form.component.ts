import { Component, OnInit } from '@angular/core';
import { SwitchLanguageComponent } from '@components/switch-language/switch-language.component';
import { ICountryCode } from 'app/interfaces';
import { SharedModule } from 'app/shared';
import { OnlyDigitsDirective } from '@components/directives';
import { NgClass } from '@angular/common';
import { AbstractControl, FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { catchError, of } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-sign-in-form',
  standalone: true,
  imports: [
    SwitchLanguageComponent,
    SharedModule,
    OnlyDigitsDirective,
    NgClass,
    ReactiveFormsModule,
    FormsModule
 ],
  templateUrl: './sign-in-form.component.html',
  styleUrl: './sign-in-form.component.scss'
})
export class SignInFormComponent implements OnInit {

  countryCodes: ICountryCode[] = [];
  selectedCountryCode: number = 374;
  isOpen: boolean = false;
  form = this.fb.group({
    username: new FormControl<number | null>(null, [Validators.required]),
    password: new FormControl<string>('', [Validators.required])
  });
  hasCheckedPhoneNumber: boolean = false;
  errorMessage = '';
  hidePassword: boolean = true;

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.authService.getCountryCodes().subscribe(res => {
      this.countryCodes = res;
    });
  }

  toggleCountryCodes(isOpen?: boolean) {
    this.isOpen = isOpen ? isOpen : !this.isOpen;
  }

  proceedNext(): void {
    if (!this.hasCheckedPhoneNumber) {
      const body = {
        username: `${this.selectedCountryCode}${this.usernameControl.value}`.replace(/\s+/g,'')
      }
      this.authService.checkPhone(body)
        .pipe(
          catchError(this.showError)
        )
        .subscribe(() => {
          this.hasCheckedPhoneNumber = true;
          this.errorMessage = '';
        });

        return;
    }

    const body = {
      username: `${this.selectedCountryCode}${this.usernameControl.value}`.replace(/\s+/g,''),
      password: this.passwordControl.value
    };

    this.authService.login(body)
    .pipe(
      catchError(this.showError.bind(this))
    )
    .subscribe(() => {
      this.router.navigateByUrl('system')
    });
  }

  showError(res: any) {
    this.errorMessage = res.error.message;
    return of(null);
  }

  toggleHidePassword(): void {
    this.hidePassword = !this.hidePassword;
  }

  get usernameControl(): AbstractControl<number | null> {
    return this.form.get('username') as AbstractControl;
  }

  get passwordControl(): AbstractControl<string> {
    return this.form.get('password') as AbstractControl;
  }
}
