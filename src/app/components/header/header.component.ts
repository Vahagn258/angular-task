import { NgClass } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { SwitchLanguageComponent } from '@components/switch-language/switch-language.component';
import { AuthService } from '@services/auth.service';
import { BadgeDirective } from 'app/directives';
import { IUserData } from 'app/interfaces';
import { SharedModule } from 'app/shared';

const menuData = [
  {
    companyName: '"Company" LLC',
    type: 'Owner',
    selected: true
  },
  {
    companyName: '"Company" 2',
    type: 'Executive director'
  },
  {
    companyName: '"Company" 3',
    type: 'Manager'
  },
  {
    companyName: '"Company" 4',
    type: 'Owner'
  }
];

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SharedModule,
    BadgeDirective,
    SwitchLanguageComponent,
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnChanges {

  @Input() userData?: IUserData | null;

  isMenuOpen: boolean = false;

  menuItems = menuData;

  constructor(private authService: AuthService,
              private router: Router
  ) {

  }

  ngOnInit(): void {
    // console.log(this.userData)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.userData)
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout(): void {
    this.authService.currentToken = null;
    this.router.navigateByUrl('sign-in');
  }

}
