import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarmenuComponent } from './sidebarmenu/sidebarmenu.component';
import { from } from 'rxjs';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { ExperianceComponent } from './experiance/experiance.component';
import { IntrestComponent } from './intrest/intrest.component';
import { AwardsComponent } from './awards/awards.component';
import { EductionComponent } from './eduction/eduction.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarmenuComponent,
    SkillsComponent,
    AboutComponent,
    ExperianceComponent,
    IntrestComponent,
    AwardsComponent,
    EductionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
