import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { SurfaceTestComponent } from './components/surface-test/surface-test.component';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import { LangSwitcherComponent } from './components/lang-switcher/lang-switcher.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { SkillPictureComponent } from './components/skill-picture/skill-picture.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ResponsiveImageComponent } from './components/responsive-image/responsive-image.component';
import { RouterModule } from '@angular/router';
import { OtherSitesComponent } from './components/other-sites/other-sites.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WhatsappComponent } from './components/whatsapp/whatsapp.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileCardComponent,
    SurfaceTestComponent,
    ThemeSwitcherComponent,
    LangSwitcherComponent,
    ProfileInfoComponent,
    HeroBannerComponent,
    SkillPictureComponent,
    SkillListComponent,
    FooterComponent,
    ResponsiveImageComponent,
	  OtherSitesComponent,
  ],
  imports: [
    FormsModule,
    WhatsappComponent,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
	CommonModule,
 ServiceWorkerModule.register('ngsw-worker.js', {
   enabled: environment.production,
   // Register the ServiceWorker as soon as the application is stable
   // or after 30 seconds (whichever comes first).
   // registrationStrategy: 'registerWhenStable:30000'
   registrationStrategy: 'registerImmediately'
 }),
 RouterModule
  ],
  providers: [BrowserModule,
    HttpClient
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
