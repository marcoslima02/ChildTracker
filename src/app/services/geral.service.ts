import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login-model';

@Injectable({
  providedIn: 'root'
})
export class GeralService {

  public logins: LoginModel[] = [];
  public login = new LoginModel();

  constructor() {
    this.login.email = 'marcoslima@gmail.com';
    this.login.senha = '1234';

    this.logins.push(this.login);
    this.login = new LoginModel();
  }

  async logar(req: LoginModel) {
    let logado: boolean = false;
    for(let l of this.logins){
      if(l.email == req.email && l.senha == req.senha){
        logado = true;
      }
    }
    return logado;
  }
}  