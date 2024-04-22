import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SharedModule } from 'app/shared';

@Component({
  selector: 'app-additional-data',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './additional-data.component.html',
  styleUrl: './additional-data.component.scss'
})
export class AdditionalDataComponent {

  @Input() data?: string;

}
