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
    public geral: GeralService,
    public nav: NavController,
  ) {}

  ngOnInit() {
    this.carregaEmpresas()
  }

  carregaEmpresas(){
    this.empresas = [
      {
        id: 1,
        empresa: "Wet but not Wild",
        descricao: "Parque aquático.",
        // descricao: "Parque aquático amplo e colorido com toboáguas, piscina de ondas e eventos e DJs esporádicos.",
        imagem: "assets/images/wetButNotWild.jpg"
      },
      {
        id: 2,
        empresa: "Dry'n Wild",
        descricao: "Parque desertico.",
        // descricao: "Parque Desertico pequeno e monocromatico com escorregadores, areia e nunca festas.",
        imagem: "assets/images/wetButNotWild.jpg"
      },
      {
        id: 3,
        empresa: "Atlantic City",
        descricao: "Parque aquático.",
        // descricao: "Parque aquático amplo e colorido com toboáguas, piscina de ondas e eventos e DJs esporádicos.",
        imagem: "assets/images/wetButNotWild.jpg"
      }
    ]
  }

  selecionarEmpresa(e: any){
    console.log("selecionarEmpresa")
    this.nav.navigateRoot(['/tab-menu/localizacao']);
  }
}
