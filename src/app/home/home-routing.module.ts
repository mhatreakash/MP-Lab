import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children:
      [{
        path: 'dashboard',
        children:
          [
            {
              path: '',
              loadChildren: '../main/dashboard/dashboard.module#DashboardPageModule'
            }
          ]
      },
      {
        path: 'about',
        children:
          [
            {
              path: '',
              loadChildren: '../main/about/about.module#AboutPageModule'
            }
          ]
      },

      {
        path: 'profile',
        children:
          [
            {
              path: '',
              loadChildren: '../main/profile/profile.module#ProfilePageModule'
            }
          ]
      },
      {
        path: '',
        redirectTo: '/home/dashboard',
        pathMatch: 'full'
      }
      ]
  },
  {
    path: '',
    redirectTo: '/home/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports:
    [
      RouterModule.forChild(routes)
    ],
  exports:
    [
      RouterModule
    ]
})
export class HomeRoutingModule { }
