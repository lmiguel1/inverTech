import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private auth: AuthService, private router: Router, private toastr: ToastrService){}

 logout(){
  this.auth.logout();
  this.router.navigate(['/login'])
  this.toastr.info('Sesión terminada');
      return;

 }

}



