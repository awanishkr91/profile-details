import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarmenuComponent } from './sidebarmenu/sidebarmenu.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { ExperianceComponent } from './experiance/experiance.component';
import { IntrestComponent } from './intrest/intrest.component';
import { AwardsComponent } from './awards/awards.component';
import { EductionComponent } from './eduction/eduction.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'experiance', component: ExperianceComponent },
  { path: 'eduction', component: EductionComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'interest', component: IntrestComponent },
  { path: 'awards', component: AwardsComponent },
  
  // otherwise redirect to home
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
