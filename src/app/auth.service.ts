import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserI } from './models.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authfirebase: AngularFireAuth) { }

  logout(){
    this.authfirebase.signOut();
  }

  registrarUser(datos: UserI){
    return this.authfirebase.createUserWithEmailAndPassword(datos.correo, datos.password);

  }

}
