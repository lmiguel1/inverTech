import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//Módulos
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';


import { NgxPayPalModule } from 'ngx-paypal';


//Componentes
import { AppComponent } from './app.component';
import { HeaderuserinfoComponent } from './headeruserinfo/headeruserinfo.component';
import { MainuserinfoComponent } from './mainuserinfo/mainuserinfo.component';
import { MessageComponent } from './profiling/message/message.component';
import { ProfilingComponent } from './profiling/profiling.component';
import { LearningPathComponent } from './LearningPath/learning-path.component';
import { LearningheaderComponent } from './LearningPath/learningheader/learningheader.component';
import { LearningsectionComponent } from './LearningPath/learningsection/learningsection.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { MainPageComponent } from './mainPage/main-page.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from './environments/environment';
import { RetrievePasswordComponent } from './auth/retrieve-password/retrieve-password.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';



@NgModule({
  declarations: [
    //Aqui se deben declarar TODOs lo componentes que se van a usar, a menos de que sean hijos de otros componentes y no se deban mostrar aca
    AppComponent,
    ProfilingComponent,
    MessageComponent,
    LearningPathComponent,
    LearningheaderComponent,
    LearningsectionComponent,
    HeaderuserinfoComponent,
    MainuserinfoComponent,
    UserInfoComponent,
    MainPageComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    RetrievePasswordComponent,
    VerifyEmailComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPayPalModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added

    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
