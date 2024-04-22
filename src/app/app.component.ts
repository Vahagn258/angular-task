import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingService } from './services';
import { AsyncPipe } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AsyncPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular-task';
  isLoading?: BehaviorSubject<boolean>;

  constructor(private loadingService: LoadingService) {
  }

  ngOnInit(): void {
    this.isLoading = this.loadingService.isLoading$;
    this.loadingService.isLoading$.subscribe(console.log)
  }
}
