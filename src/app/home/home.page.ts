import { Component, OnInit} from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule, LoadingController, NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms'; // Import NgForm
import { GeralService } from '../services/geral.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class HomePage {

  empresas: any[] = []

  constructor(
    public alertController: AlertController,
    public loadingCtrl: LoadingController,
    public geral: GeralService,
    public nav: NavController,
  ) {}

  ngOnInit() {
    this.carregaEmpresas()
  }

  carregaEmpresas(){
    this.empresas = [
      {
        id: 2,
        empresa: "Dry'n Wild",
        descricao: "Av. Renato Pavanelli, 132 - Rafael Alegre",
        // descricao: "Parque Desertico pequeno e monocromatico com escorregadores, areia e nunca festas.",
        imagem: "assets/images/desert.jpg"
      },
      {
        id: 1,
        empresa: "Wet but not Wild",
        descricao: "Av. Antonio Negro, 198 - Granja Machado",
        // descricao: "Parque aquático amplo e colorido com toboáguas, piscina de ondas e eventos e DJs esporádicos.",
        imagem: "assets/images/wetButNotWild.jpg"
      },
      {
        id: 3,
        empresa: "Atlantic City",
        descricao: "Av. Caio Enrico, 345 - Rennas Visk",
        // descricao: "Parque aquático amplo e colorido com toboáguas, piscina de ondas e eventos e DJs esporádicos.",
        imagem: "assets/images/atlanticCity.jpg"
      }
    ]
  }

  async selecionarEmpresa(e: any){
    if(e.id == 1 || e.id == 3) {
      const alert = await this.alertController.create({
        header: 'Aviso',
        message: 'Você não está proximo o suficiente de '+ e.empresa +'!',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }
    console.log("selecionarEmpresa")
    this.nav.navigateRoot(['/tab-menu/localizacao']);
  }
}
