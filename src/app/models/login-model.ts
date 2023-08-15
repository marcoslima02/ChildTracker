import { Injectable } from '@angular/core';

@Injectable()
export class LoginModel {
    public email: string;
    public senha: string;
    
    constructor() {
        this.email = '';
        this.senha = '';
    }
}
