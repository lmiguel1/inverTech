import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoginService } from 'src/app/services/login.service';
import { ToastrService } from 'ngx-toastr';
import { FirebaseErrorCodeService } from 'src/app/services/firebase-error-code.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userLogin: FormGroup;
  authfirebase: any;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firebaseError: FirebaseErrorCodeService
    ){
      this.userLogin = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      })
    }
    registar(){
      const email = this.userLogin.value.email;
      const password = this.userLogin.value.password;

      this.afAuth.signInWithEmailAndPassword(email, password).then((user) =>{     
        if(user.user?.emailVerified){
          this.router.navigate(['/learning']);
        }else{
          this.router.navigate(['/verify-email']);
        }
        }).catch((error) => {
          this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
        })        
    }
    
   
    
}
  