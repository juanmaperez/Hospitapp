import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [{
    title: 'Principal',
    icon: 'mdi mdi-gauge',
    submenu: [{
      title: 'dashboard',
      url: '/dashboard'
    },
    {
      title: 'Progress Bar',
      url: '/progress'
    },
    {
      title: 'Graphics',
      url: '/graphics'
    },
    {
      title: 'Promises',
      url: '/promises'
    },
    {
      title: 'Rxjs',
      url: '/rxjs'
    }]
  },
  {
    title: 'Management',
    icon: 'mdi mdi-folder-lock-open',
    submenu: [
      { title: 'Users', url: '/users'},
      { title: 'Hospitals', url: '/hospitals'},
      { title: 'Doctors', url: '/doctors'}
    ]
  }
];

  constructor() { }

}
