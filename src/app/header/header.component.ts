import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirestoreService } from '../firestore.service';
import { UserI } from '../models.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  login: boolean = false;
  rol: "visitante" | 'admin'= "visitante";

  constructor(private auth: AuthService, private router: Router, private toastr: ToastrService, private firestore: FirestoreService){

    this.auth.stateUser().subscribe( res => {
      if (res){
        console.log('si está logueado');
        this.login = true;
        this.getDatosUser(res.uid)
      } else {
        console.log('no está logueado');
        this.login = false;
      }
    })
  }

 

 logout(){
  this.auth.logout();
  this.router.navigate(['/login'])
  this.toastr.info('Sesión terminada');
      return;

 }

 getDatosUser(uid:string){
  const path ="Usuarios";
  const id = uid;
  this.firestore.getDoc<UserI>(path, id).subscribe( res => {
    console.log ('datos -> ', res);
    if (res){
      this.rol = res.perfil;
    }
  })

 }
 

  
  



 



}



