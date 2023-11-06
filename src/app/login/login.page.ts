import { Component, OnInit, ViewChild } from '@angular/core'; // Importe ViewChild aqui
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule, LoadingController, NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms'; // Import NgForm
import { LoginModel } from 'src/app/models/login-model'; // Import your LoginModel
import { GeralService } from '../services/geral.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class LoginPage implements OnInit {
  public login = new LoginModel();
  senhaVisivel: boolean = false;

  @ViewChild('form', { static: false }) form: NgForm;

  constructor(
    public alertController: AlertController,
    public loadingCtrl: LoadingController,
    public nav: NavController,
    public geral: GeralService
  ) { }

  async ngOnInit() {
  }
  alternarTipoSenha() {
    this.senhaVisivel = !this.senhaVisivel;
  }
  async esqueceuSenha() {
    console.log("esqueceu senha")
  }
  async lembrarUsuario() {
    console.log("Lembrar usuário")
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
  cadastro() {
    this.nav.navigateRoot(['/cadastro']);
  }

  async autenticarPessoa() {
    if (this.form.invalid) {
      const alert = await this.alertController.create({
        header: 'Aviso',
        message: 'Preencha os Campos!',
        buttons: ['OK'],
      });
      await alert.present();
    }
    const loading = await this.loadingCtrl.create(
      { message: 'Comunicando com o servidor...' }
    );
    await loading.present();
    let logar: boolean = await this.geral.logar(this.login);

    if(logar) {
      await loading.dismiss();
      this.nav.navigateRoot(['/tab-menu/home']);
    } else {
      await loading.dismiss();
      const alert = await this.alertController.create({
        header: 'Aviso',
        message: 'Usuário ou Senha invalidos!',
        buttons: ['OK'],
      });
      await alert.present();
    }
      
   
  }



}
