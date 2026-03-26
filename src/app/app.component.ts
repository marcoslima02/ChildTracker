import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AppComponent {
  public appPages = [  
    {
      title: 'Home',
      url: '/tab-menu/home',
      icon: 'home'
    },
    {
      title: 'Configurações',
      url: '/configuracao',
      icon: 'settings'
    },
    {
      title: 'Sair',
      url: '/login',
      icon: 'log-in'
    },
    {
      title: 'Logout',
      url: '/logout',
      icon: 'log-out'
    },
    
  ];

  constructor() {}
}
