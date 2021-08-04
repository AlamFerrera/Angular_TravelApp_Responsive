import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { MainComponent } from './componentes/main/main.component';
import { AboutComponent } from './componentes/about/about.component';
import { DiscoverComponent } from './componentes/discover/discover.component';
import {SwiperModule} from 'swiper/angular';
import { ExperienceComponent } from './componentes/experience/experience.component';
import { VideoComponent } from './componentes/video/video.component';
import { PlacesComponent } from './componentes/places/places.component';
import { SubscribeComponent } from './componentes/subscribe/subscribe.component';
import { SponsorComponent } from './componentes/sponsor/sponsor.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AboutComponent,
    DiscoverComponent,
    ExperienceComponent,
    VideoComponent,
    PlacesComponent,
    SubscribeComponent,
    SponsorComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
