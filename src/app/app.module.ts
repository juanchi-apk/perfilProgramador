import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './components/about/about.component';
import {HttpClientModule} from '@angular/common/http';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { ExperienceItemComponent } from './components/experience-item/experience-item.component';
import { StudiesComponent } from './components/studies/studies.component';
import { StudyItemComponent } from './components/study-item/study-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ExperienceDetailsComponent } from './components/experience-item/experience-details/experience-details.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    AboutComponent,
    ExperiencesComponent,
    ExperienceItemComponent,
    StudiesComponent,
    StudyItemComponent,
    ExperienceDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgCircleProgressModule.forRoot({
    }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
