import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal'

import { AppComponent } from './app.component';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { SectionComponent } from './components/section/section.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ProgressSkillComponent } from './components/progress-skill/progress-skill.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ComplementaryEducationComponent } from './components/complementary-education/complementary-education.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { AboutMeComponent } from './components/about-me/about-me.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonalDataComponent,
    SectionComponent,
    ContactsComponent,
    ProgressSkillComponent,
    ExperienceComponent,
    EducationComponent,
    ComplementaryEducationComponent,
    LanguagesComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
