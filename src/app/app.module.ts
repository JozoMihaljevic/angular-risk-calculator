import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { RezultatiComponent } from './rezultati/rezultati.component';
import { MembersComponent } from './members/members.component';
import { NalazComponent } from './nalaz/nalaz.component';
import { OsobniFormComponent } from './osobni-form/osobni-form.component';

import { BmiService } from './bmi.service';
import { WhrService } from './whr.service';
import { HomaService } from './homa.service';
import { KrvnaSlikaService } from './krvna-slika.service';
import { KalkulatorRizikaService } from './kalkulatorRizika.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    RezultatiComponent,
    MembersComponent,
    NalazComponent,
    OsobniFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'member',
        component: MembersComponent
      },
      {
        path: 'rezultat',
        component: RezultatiComponent
      },
      {
        path: 'nalaz',
        component: NalazComponent
      },
    ]),
  ],
  providers: [
    BmiService,
    WhrService,
    HomaService,
    KrvnaSlikaService,
    KalkulatorRizikaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
