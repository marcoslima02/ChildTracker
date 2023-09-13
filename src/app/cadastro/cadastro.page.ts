import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { AlertController, IonicModule, LoadingController, NavController } from '@ionic/angular';
import { ThemeService } from '../services/theme.service';
import { CadastroModel } from '../models/cadastro-model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CadastroPage implements OnInit {

  cadastro: CadastroModel = new CadastroModel();
  form: FormGroup;

  constructor(
    public theme: ThemeService,
    public formBuilder: FormBuilder,
    // public storage: Storage,
    public alertController: AlertController, 
    public loadingCtrl: LoadingController, 
    public nav: NavController,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      cpf: [[],Validators.required],
      email: [[],Validators.required],
      senha: [[],Validators.required],
      repetirSenha: [[],Validators.required],
      telefone: [[],[]]
    });
  }

  /*
   * DARK / LIGHT THEME
   */
  async enableDark(){
    // this.storage.set("theme", "dark");
    this.theme.enableDark();
  }

  enableLight(){
    // this.storage.set("theme", "light");
    this.theme.enableLight();
  }

  /*
   * END OF DARK / LIGHT THEME
   */


  loginWithGoogle(){
    console.log("google")
  }
  loginWithFacebook(){
    console.log("facebook")
  }
  loginWithApple(){
    console.log("apple")
  }
  login(){
    this.nav.navigateRoot(['/login']);
  }

  termosUso(){
    console.log("Aceito os termos de uso")
  }
}
