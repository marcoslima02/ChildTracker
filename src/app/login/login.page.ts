import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule, LoadingController, NavController } from '@ionic/angular';
import { ThemeService } from 'src/app/services/theme.service';
import { LoginModel } from 'src/app/models/login-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class LoginPage implements OnInit {
  public login = new LoginModel();
  senhaVisivel: boolean = false; // Adicione essa linha
  constructor(
    public theme: ThemeService,
    public alertController: AlertController,
    public loadingCtrl: LoadingController,
    public nav: NavController,
  ) { }

  async ngOnInit() {
    this.selecionarTema();
  }
  alternarTipoSenha() {
    this.senhaVisivel = !this.senhaVisivel;
  }

  /*
   * DARK / LIGHT THEME
   */
  async enableDark() {
    // this.storage.set("theme", "dark");
    this.theme.enableLight();
    // this.theme.enableDark();
  }

  enableLight() {
    // this.storage.set("theme", "light");
    this.theme.enableLight();
  }

  async selecionarTema() {
    let tema: any;
    // await this.storage.get("theme").then( async (ps: any) => { 
    //   tema = ps;
    // });

    // if(tema == "dark"){
    //   this.enableDark();
    // } else {
    //   this.enableLight();
    // }

    if (tema == "light") {
      this.enableLight();
    } else {
      this.enableDark();
    }
  }

  /*
   * END OF DARK / LIGHT THEME
   */

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
    this.nav.navigateRoot(['/tab-menu/home']);
  }

}
