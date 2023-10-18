import { Injectable } from '@angular/core';

@Injectable()
export class ProfileModel {
    public name: string;
    public profileImage: string;
    public email: string;
    public password: string;
    
    constructor() {
        this.name = '';
        this.profileImage = '';
        this.email = '';
        this.password = '';
    }
}
