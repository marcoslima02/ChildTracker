import { Injectable } from '@angular/core';

@Injectable()
export class CadastroModel {
    public cpf: string;
    public telefone: string;
    public email: string;
    public senha: string;
    public repetirSenha: string;
    
    constructor() {
        this.cpf = '';
        this.telefone = '';
        this.email = '';
        this.senha = '';
        this.repetirSenha = '';
    }
}
