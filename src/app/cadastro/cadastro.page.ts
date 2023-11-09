import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { AlertController, IonicModule, LoadingController, NavController } from '@ionic/angular';
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

  senhaVisivel1: boolean = false; // Adicione essa linha

  senhaVisivel2: boolean = false; // Adicione essa linha

  constructor(
    public formBuilder: FormBuilder,
    // public storage: Storage,
    public alertController: AlertController,
    public loadingCtrl: LoadingController,
    public nav: NavController,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      cpf: [null, Validators.required],
      email: [null, Validators.required],
      senha: [null, Validators.required],
      repetirSenha: [null, Validators.required],
      telefone: [null, []]
    });
  }
  alternarTipoSenha1() {
    this.senhaVisivel1 = !this.senhaVisivel1;
  }
  alternarTipoSenha2() {
    this.senhaVisivel2 = !this.senhaVisivel2;
  }
  loginWithGoogle() {
    console.log("google")
  }
  loginWithFacebook() {
    console.log("facebook")
  }
  loginWithApple() {
    console.log("apple")
  }
  login() {
    this.nav.navigateRoot(['/login']);
  }

  termosUso() {
    console.log("Aceito os termos de uso")
  }
  LerTermosUso() {
    console.log("PopUp os termos de uso")
  }

  async cadastrar(){
    if(this.cadastro.senha != this.cadastro.repetirSenha){
      const alert = await this.alertController.create({
        header: 'Aviso',
        message: 'As senhas não podem ser diferentes!',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    // if(this.cadastro.email != "marcoslima@gmail.com" ){
    //   const alert = await this.alertController.create({
    //     header: 'Aviso',
    //     message: 'Email Inválido!',
    //     buttons: ['OK'],
    //   });
    //   await alert.present();
    //   return;
    // }

    // if(this.cadastro.senha != "childtracker1234" ){
    //   const alert = await this.alertController.create({
    //     header: 'Aviso',
    //     message: 'Senha Inválida!',
    //     buttons: ['OK'],
    //   });
    //   await alert.present();
    //   return;
    // }

    const loading = await this.loadingCtrl.create(
      { message: 'Comunicando com o servidor...' }
    );
    await loading.present();
    setTimeout(async () => {
      await loading.dismiss();
      const alert = await this.alertController.create({
        header: 'Sucesso',
        message: 'Usuário cadastrado com sucesso!',
        buttons: ['OK'],
      });
      await alert.present();
      this.login();
    }, 1500);
    
  }
}
