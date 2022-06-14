import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComingSoonPageComponent } from "./coming-soon/coming-soon-page.component";
import { ErrorPageComponent } from "./error/error-page.component";
import { ForgotPasswordPageComponent } from "./forgot-password/forgot-password-page.component";
import { LockScreenPageComponent } from "./lock-screen/lock-screen-page.component";
import { LoginPageComponent } from "./login/login-page.component";
import { MaintenancePageComponent } from "./maintenance/maintenance-page.component";
import { RegisterPageComponent } from "./register/register-page.component";
import { ComponentePruebaComponent } from "./componente-prueba/componente-prueba.component";
import { InicioComponent } from "./inicio/inicio.component";
import { AdquisicionComponent } from "./adquisicion/adquisicion.component";
import { InfoGeneralComponent } from './info-general/info-general.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'comingsoon',
        component: ComingSoonPageComponent,
        data: {
          title: 'Coming Soon page'
        }
      },
      {
        path: 'error',
        component: ErrorPageComponent,
        data: {
          title: 'Error Page'
        }
      },
      {
        path: 'forgotpassword',
        component: ForgotPasswordPageComponent,
        data: {
          title: 'Forgot Password Page'
        }
      },

      {
        path: 'lockscreen',
        component: LockScreenPageComponent,
        data: {
          title: 'Lock Screen page'
        }
      },
      {
        path: 'login',
        component: LoginPageComponent,
        data: {
          title: 'Login Page'
        }/*,
        children: [
          { path: 'info-general', component: InfoGeneralComponent }
        ]*/
      },
      {
        path: 'maintenance',
        component: MaintenancePageComponent,
        data: {
          title: 'Maintenance Page'
        }
      },
      {
        path: 'register',
        component: RegisterPageComponent,
        data: {
          title: 'Register Page'
        }
      },
      {
        path: 'componente-prueba',
        component: ComponentePruebaComponent,
        data: {
          title: 'Componente Prueba'
        }
      },
      {
        path: 'inicio',
        component: InicioComponent,
        data: {
          title: 'Inicio'
        }
      },
      {
        path: 'adquisicion',
        component: AdquisicionComponent,
        data: {
          title: 'Adquisicion'
        }
      },
      /*{
        path: 'info-general',
        component: InfoGeneralComponent,
        data: {
          title: 'Información general'
        }
      }*/
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentPagesRoutingModule { }
