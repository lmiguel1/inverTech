import { Component, NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router'; //todo enrutamiento debe importar RouterModule y Routes
import { ProfilingComponent } from './profiling/profiling.component';
import { LearningPathComponent } from './LearningPath/learning-path.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { MainPageComponent } from './mainPage/main-page.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LearningheaderComponent } from './LearningPath/learningheader/learningheader.component';
import { LearningsectionComponent } from './LearningPath/learningsection/learningsection.component';
import { RetrievePasswordComponent } from './auth/retrieve-password/retrieve-password.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';

const routes: Routes = [
  //aqui se indican las rutas
  { path: '', component: LearningPathComponent},
  { path: 'mainpage', component: MainPageComponent},
  { path: 'profiling', component: ProfilingComponent},
  { path: 'learning', component: LearningPathComponent },
  { path: 'learningheader', component: LearningheaderComponent},
  { path: 'learningsection', component: LearningsectionComponent},
  { path: 'userinfo', component: UserInfoComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'verify-email', component: VerifyEmailComponent},
  { path: 'retrieve-password', component: RetrievePasswordComponent},
  { path: 'feedback', component: FeedbackComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'footer', component: FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
