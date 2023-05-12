import { Component, ContentChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { FormGroup } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { FirebaseErrorCodeService } from 'src/app/services/firebase-error-code.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent{
  userRegister: FormGroup;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firebaseError: FirebaseErrorCodeService
    ){
    this.userRegister = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repetirPassword: ['', Validators.required]
    })
  } 

  registrar() {
    const name = this.userRegister.value.name;
    const email = this.userRegister.value.email;
    const password = this.userRegister.value.password;
    const repetirPassword = this.userRegister.value.repetirPassword;   

    if(password !== repetirPassword ){
      this.toastr.error('Las contraseñas ingresadas deben ser iguales', 'Error');
      return;
    }

    this.afAuth.createUserWithEmailAndPassword(email, password)
    .then((user) =>{  
      this.verifyEmail();          
    }).catch((error) =>{                   
       this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
    });      
  }  
  verifyEmail(){
    this.afAuth.currentUser
      .then((user) => user?.sendEmailVerification())
      .then(() => {
        this.toastr.info('Te enviamos un mensaje a tu correo electrónico para tu verificación', 'Verificar correo electrónico');
        this.router.navigate(['/login']);
    });
  }
}

