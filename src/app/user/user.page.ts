import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class UserPage implements OnInit {

  constructor(

    public nav: NavController,
  ) { }

  ngOnInit() {
  }

  // Define the trocarFoto() method
  trocarFoto() {
    // Add your code to handle image changing here
  }

  // Define the salvarDados() method
  salvarDados() {
  }
}
