import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalleryPageComponent } from "./gallery/gallery-page.component";
import { InvoicePageComponent } from "./invoice/invoice-page.component";
import { HorizontalTimelinePageComponent } from "./timeline/horizontal/horizontal-timeline-page.component";
import { UserProfilePageComponent } from "./user-profile/user-profile-page.component";
import { SearchComponent } from './search/search.component';
import { FaqComponent } from './faq/faq.component';
import { TimelineVerticalCenterPageComponent } from './timeline/vertical/timeline-vertical-center-page/timeline-vertical-center-page.component';
import { TimelineVerticalLeftPageComponent } from './timeline/vertical/timeline-vertical-left-page/timeline-vertical-left-page.component';
import { TimelineVerticalRightPageComponent } from './timeline/vertical/timeline-vertical-right-page/timeline-vertical-right-page.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersViewComponent } from './users/users-view/users-view.component';
import { UsersEditComponent } from './users/users-edit/users-edit.component';

import { InfoGeneralComponent } from './info-general/info-general.component';
import { InfoGeneralFormComponent } from './info-general/info-general-form.component';
import { InfoFiscalComponent } from './info-fiscal/info-fiscal.component';
import { InfoFiscalFormComponent } from './info-fiscal/info-fiscal-form.component';
import { InfoCatastralComponent } from './info-catastral/info-catastral.component';
import { InfoCatastralFormComponent } from './info-catastral/info-catastral-form.component';
import { LocalizacionComponent } from './localizacion/localizacion.component';
import { LocalizacionFormComponent } from './localizacion/localizacion-form.component';
import { PropiedadComponent } from './propiedad/propiedad.component';
import { PropiedadFormComponent } from './propiedad/propiedad-form.component';
import { InfoGeneralUnicaComponent } from './info-general-unica/info-general-unica.component';
import { AsignarInfoFiscalComponent } from './info-general/asignar-info-fiscal/asignar-info-fiscal.component';
import { AsignarInfoCatastralComponent } from './info-general/asignar-info-catastral/asignar-info-catastral.component';
import { AsignarLocalizacionComponent } from './info-general/asignar-localizacion/asignar-localizacion.component';
import { AsignarPropiedadComponent } from './info-general/asignar-info-catastral/asignar-propiedad/asignar-propiedad.component';
import { AsignarEstudiosyconceptosComponent } from './info-general/asignar-estudiosyconceptos/asignar-estudiosyconceptos.component';
import { AsignarInfoTecnicaComponent } from './info-general/asignar-info-tecnica/asignar-info-tecnica.component';
import { EstudiosyconceptosComponent } from './estudiosyconceptos/estudiosyconceptos.component';
import { TecnicaComponent } from './Tecnica/tecnica.component';
import { TecnicaFormComponent } from './Tecnica/tecnica-form.component';
import { EstudiosyconceptosFormComponent } from './estudiosyconceptos/estudiosyconceptos-form.component';
import { AdquisicionFormComponent } from './adquisicion/adquisicion-form.component';
import { AdquisicionComponent } from './adquisicion/adquisicion.component';

const routes: Routes = [
  {
    path: '',
    children: [

      {
        path: 'gallery',
        component: GalleryPageComponent,
        data: {
          title: 'Gallery Page'
        }
      },
      {
        path: 'invoice',
        component: InvoicePageComponent,
        data: {
          title: 'Invoice Page'
        }
      },
      {
        path: 'horizontaltimeline',
        component: HorizontalTimelinePageComponent,
        data: {
          title: 'Horizontal Timeline Page'
        }
      },
      {
        path: 'timeline-vertical-center',
        component: TimelineVerticalCenterPageComponent,
        data: {
          title: 'Timeline Vertical Center Page'
        }
      },
      {
        path: 'timeline-vertical-left',
        component: TimelineVerticalLeftPageComponent,
        data: {
          title: 'Timeline Vertical Left Page'
        }
      },
      {
        path: 'timeline-vertical-right',
        component: TimelineVerticalRightPageComponent,
        data: {
          title: 'Timeline Vertical Right Page'
        }
      },
      {
        path: 'account-settings',
        component: AccountSettingsComponent,
        data: {
          title: 'Account Settings Page'
        }
      },
      {
        path: 'profile',
        component: UserProfilePageComponent,
        data: {
          title: 'User Profile Page'
        }
      },
      {
        path: 'search',
        component: SearchComponent,
        data: {
          title: 'Search'
        }
      },
      {
        path: 'faq',
        component: FaqComponent,
        data: {
          title: 'FAQ'
        }
      },
      {
        path: 'kb',
        loadChildren: () => import('./knowledge-base/knowledge-base.module').then(m => m.KnowledgeBaseModule)
      },
      {
        path: 'users-list',
        component: UsersListComponent,
        data: {
          title: 'List'
        }
      },
      {
        path: 'users-view',
        component: UsersViewComponent,
        data: {
          title: 'View'
        }
      },
      {
        path: 'users-edit',
        component: UsersEditComponent,
        data: {
          title: 'Edit'
        }
      },
      {
        path: 'info-general',
        component: InfoGeneralComponent,
        data: {
          title: 'Información general'
        }
      },
      {
        path: 'info-general/form',
        component: InfoGeneralFormComponent,
        data: {
          title: 'Formulario información general'
        }
      },
      {
        path: 'info-general/form/:id',
        component: InfoGeneralFormComponent,
        data: {
          title: 'Formulario editar información general'
        }
      },
      {
        path: 'info-fiscal',
        component: InfoFiscalComponent,
        data: {
          title: 'Información fiscal'
        }
      },
      {
        path: 'info-fiscal/form',
        component: InfoFiscalFormComponent,
        data: {
          title: 'Formulario información fiscal'
        }
      },
      {
        path: 'info-fiscal/form/:id',
        component: InfoFiscalFormComponent,
        data: {
          title: 'Formulario editar información fiscal'
        }
      },
      {
        path: 'info-catastral',
        component: InfoCatastralComponent,
        data: {
          title: 'Información catastral'
        }
      },
      {
        path: 'info-catastral/form',
        component: InfoCatastralFormComponent,
        data: {
          title: 'Formulario información catastral'
        }
      },
      {
        path: 'info-catastral/form/:id',
        component: InfoCatastralFormComponent,
        data: {
          title: 'Formulario editar información catastral'
        }
      },
      {
        path: 'localizacion',
        component: LocalizacionComponent,
        data: {
          title: 'Localización'
        }
      },
      {
        path: 'localizacion/form',
        component: LocalizacionFormComponent,
        data: {
          title: 'Formulario localizacion'
        }
      },
      {
        path: 'localizacion/form/:id',
        component: LocalizacionFormComponent,
        data: {
          title: 'Formulario editar localizacion'
        }
      },
      {
        path: 'propiedad',
        component: PropiedadComponent,
        data: {
          title: 'Propiedad'
        }
      },
      {
        path: 'propiedad/form',
        component: PropiedadFormComponent,
        data: {
          title: 'Formulario propiedad'
        }
      },
      {
        path: 'propiedad/form/:id',
        component: PropiedadFormComponent,
        data: {
          title: 'Formulario editar propiedad'
        }
      },
      {
        path: 'info-general-unica/asignar-info-fiscal/:id',
        component: AsignarInfoFiscalComponent,
        data: {
          title: 'Asignar información fiscal'
        }
      },
      {
        path: 'info-general-unica/asignar-info-catastral/:id',
        component: AsignarInfoCatastralComponent,
        data: {
          title: 'Asignar información catastral'
        }
      },
      {
        path: 'info-general-unica/asignar-localizacion/:id',
        component: AsignarLocalizacionComponent,
        data: {
          title: 'Asignar localización'
        }
      },
      {
        path: 'info-general-unica/asignar-info-catastral/asignar-propiedad/:id',
        component: AsignarPropiedadComponent,
        data: {
          title: 'Asignar propiedad a la información catastral'
        }
      },
      {
        path: 'info-general-unica/:id',
        component: InfoGeneralUnicaComponent,
        data: {
          title: 'Información general única'
        }
      },
      {
        path: 'info-general/asignar-estudiosyconceptos/:id',
        component: AsignarEstudiosyconceptosComponent,
        data: {
          title: 'Asignar estudios y conceptos'
        }
      },
      {
        path: 'info-general/asignar-info-tecnica/:id',
        component: AsignarInfoTecnicaComponent,
        data: {
          title: 'Asignar información técnica'
        }
      },
      {
        path: 'estudiosyconceptos',
        component: EstudiosyconceptosComponent,
        data: {
          title: 'estudiosyconceptos'
        }
      },
      {
        path: 'tecnica',
        component: TecnicaComponent,
        data: {
          title: 'tecnica'
        }
      },
      {
        path: 'tecnica/form',
        component: TecnicaFormComponent,
        data: {
          title: 'Formulario información técnica'
        }
      },
      {
        path: 'tecnica/form/:id',
        component: TecnicaFormComponent,
        data: {
          title: 'Formulario editar información técnica'
        }
      },
      {
        path: 'estudiosyconceptos/form',
        component: EstudiosyconceptosFormComponent,
        data: {
          title: 'Formulario información estudios y conceptos'
        }
      },
      {
        path: 'estudiosyconceptos/form/:id',
        component: EstudiosyconceptosFormComponent,
        data: {
          title: 'Formulario editar información estudios y conceptos'
        }
      },
      {
        path: 'adquisicion/form',
        component: AdquisicionFormComponent,
        data: {
          title: 'Formulario información adquisicion'
        }
      },
      {
        path: 'adquisicion/form/:id',
        component: AdquisicionFormComponent,
        data: {
          title: 'Formulario editar información eadquisicion'
        }
      },
      {
        path: 'adquisicion',
        component: AdquisicionComponent,
        data: {
          title: 'Formulario editar información eadquisicion'
        }
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullPagesRoutingModule { }
