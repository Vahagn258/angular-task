import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface IBreadcrumb {
  label: string,
  path: string,
  active: boolean
}

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {

  breadcrumbs: IBreadcrumb[] = [
    {
      label: 'Breadcrumb 1',
      path: '/system1',
      active: false
    },
    {
      label: 'Breadcrumb 2',
      path: '/system2',
      active: false
    },
    {
      label: 'Breadcrumb 3',
      path: '/system',
      active: true
    }
  ];

}
