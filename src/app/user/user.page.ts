import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule, LoadingController, NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { ProfileModel } from 'src/app/models/profile-model'; // Import your ProfileModel

@Component({
  selector: 'app-profile',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class ProfilePage implements OnInit {
  public profile = new ProfileModel();
  public senhaVisivel = false;

  @ViewChild('form', { static: false }) form: NgForm;

  constructor(
    public alertController: AlertController,
    public loadingCtrl: LoadingController,
    public nav: NavController,
  ) { }

  async ngOnInit() {
    // If there is no profile image, use the default person-circle icon
    if (!this.profile.profileImage) {
      this.profile.profileImage = "assets/svg/person-circle.svg";
    }
  }

  async changeProfilePicture() {
    console.log("Change Profile Picture");
    // Add your code here to change the profile picture
  }


  async changeEmail() {
    console.log("Change Email");
    // Add your code here to change the email
    // For example, send a request to the server to update the email
  }

  async changePassword() {
    console.log("Change Password");
    // Add your code here to change the password
    // For example, open a dialog to enter a new password
  }

  logout() {
    console.log("Logout");
    // Add your code here to logout
    // For example, clear the user session and navigate back to the login page
  }

  
}
