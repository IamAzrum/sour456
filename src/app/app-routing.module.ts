import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LinksComponent } from './components/links/links.component';
import { ScheduleComponent } from './components/schedule/schedule.component'

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'links', component: LinksComponent},
  { path: 'schedule', component: ScheduleComponent}

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]

})
export class AppRoutingModule { }
