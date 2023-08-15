import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.page.html',
  styleUrls: ['./tab-menu.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TabMenuPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
