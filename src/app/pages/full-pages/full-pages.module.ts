import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { FullPagesRoutingModule } from "./full-pages-routing.module";
import { ChartistModule } from "ng-chartist";
import { AgmCoreModule } from "@agm/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";
import { SwiperModule } from "ngx-swiper-wrapper";
import { PipeModule } from "app/shared/pipes/pipe.module";

import { GalleryPageComponent } from "./gallery/gallery-page.component";
import { InvoicePageComponent } from "./invoice/invoice-page.component";
import { HorizontalTimelinePageComponent } from "./timeline/horizontal/horizontal-timeline-page.component";
import { HorizontalTimelineComponent } from "./timeline/horizontal/component/horizontal-timeline.component";
import { TimelineVerticalCenterPageComponent } from "./timeline/vertical/timeline-vertical-center-page/timeline-vertical-center-page.component";
import { TimelineVerticalLeftPageComponent } from "./timeline/vertical/timeline-vertical-left-page/timeline-vertical-left-page.component";
import { TimelineVerticalRightPageComponent } from "./timeline/vertical/timeline-vertical-right-page/timeline-vertical-right-page.component";
import { UserProfilePageComponent } from "./user-profile/user-profile-page.component";
import { SearchComponent } from "./search/search.component";
import { FaqComponent } from "./faq/faq.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { UsersListComponent } from "./users/users-list/users-list.component";
import { UsersViewComponent } from "./users/users-view/users-view.component";
import { UsersEditComponent } from "./users/users-edit/users-edit.component";

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';

import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { InfoGeneralComponent } from './info-general/info-general.component';
import { InfoGeneralFormComponent } from './info-general/info-general-form.component';
import { InfoFiscalComponent } from './info-fiscal/info-fiscal.component';
import { InfoFiscalFormComponent } from './info-fiscal/info-fiscal-form.component';
import { InfoCatastralComponent } from './info-catastral/info-catastral.component';
import { InfoCatastralFormComponent } from './info-catastral/info-catastral-form.component';
import { InfoGeneralUnicaComponent } from './info-general-unica/info-general-unica.component';
import { LocalizacionComponent } from './localizacion/localizacion.component';
import { LocalizacionFormComponent } from './localizacion/localizacion-form.component';
import { AsignarInfoFiscalComponent } from './info-general/asignar-info-fiscal/asignar-info-fiscal.component';
import { AsignarInfoCatastralComponent } from './info-general/asignar-info-catastral/asignar-info-catastral.component';
import { PropiedadComponent } from './propiedad/propiedad.component';
import { PropiedadFormComponent } from './propiedad/propiedad-form.component';
import { AsignarLocalizacionComponent } from './info-general/asignar-localizacion/asignar-localizacion.component';
import { AsignarPropiedadComponent } from './info-general/asignar-info-catastral/asignar-propiedad/asignar-propiedad.component';
import { AsignarEstudiosyconceptosComponent } from './info-general/asignar-estudiosyconceptos/asignar-estudiosyconceptos.component';
import { AsignarInfoTecnicaComponent } from "./info-general/asignar-info-tecnica/asignar-info-tecnica.component";
import { TecnicaComponent } from './Tecnica/tecnica.component';
import { TecnicaFormComponent } from "./Tecnica/tecnica-form.component";
import { EstudiosyconceptosFormComponent } from "./estudiosyconceptos/estudiosyconceptos-form.component";
import { EstudiosyconceptosComponent } from "./estudiosyconceptos/estudiosyconceptos.component";

import { AdquisicionFormComponent } from './adquisicion/adquisicion-form.component';
import { AdquisicionComponent } from './adquisicion/adquisicion.component';

@NgModule({
  imports: [
    CommonModule,
    FullPagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ChartistModule,
    AgmCoreModule,
    NgSelectModule,
    NgbModule,
    SwiperModule,
    PipeModule,
    NgxDatatableModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatExpansionModule
  ],
  declarations: [
    GalleryPageComponent,
    InvoicePageComponent,
    HorizontalTimelinePageComponent,
    HorizontalTimelineComponent,
    TimelineVerticalCenterPageComponent,
    TimelineVerticalLeftPageComponent,
    TimelineVerticalRightPageComponent,
    UserProfilePageComponent,
    SearchComponent,
    FaqComponent,
    AccountSettingsComponent,
    UsersListComponent,
    UsersViewComponent,
    UsersEditComponent,
    InfoGeneralComponent,
    InfoGeneralFormComponent,
    InfoFiscalComponent,
    InfoFiscalFormComponent,
    InfoCatastralComponent,
    InfoCatastralFormComponent,
    AsignarInfoFiscalComponent,
    AsignarInfoCatastralComponent,
    InfoGeneralUnicaComponent,
    LocalizacionComponent,
    LocalizacionFormComponent,
    PropiedadComponent,
    PropiedadFormComponent,
    AsignarLocalizacionComponent,
    AsignarPropiedadComponent,
    AsignarEstudiosyconceptosComponent,
    AsignarInfoTecnicaComponent,
    TecnicaComponent,
    TecnicaFormComponent,
    EstudiosyconceptosFormComponent,
    EstudiosyconceptosComponent,
    AdquisicionFormComponent,
    AdquisicionComponent


  ],
})
export class FullPagesModule { }
