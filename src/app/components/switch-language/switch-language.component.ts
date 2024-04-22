import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface ILanguage {
  label: string,
  code: string
}

@Component({
  selector: 'app-switch-language',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './switch-language.component.html',
  styleUrl: './switch-language.component.scss'
})
export class SwitchLanguageComponent implements OnInit {

  activeLang?: string;

  constructor(private translateService: TranslateService) {

  }

  ngOnInit(): void {
    this.activeLang = this.translateService.defaultLang;
  }

  languages: ILanguage[] = [
    {
      label: 'РУ',
      code: 'ru'
    },
    {
      label: 'ՀԱՅ',
      code: 'arm'
    },
    {
      label: 'ENG',
      code: 'en'
    }
  ];

  onLanguageChange(code: string) {
    this.translateService.setDefaultLang(code);
    this.translateService.use(code);
    this.activeLang = code;
  }

}
