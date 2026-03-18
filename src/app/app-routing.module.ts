import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/patients/pages/home/home.component';
import { AppComponent } from './app.component';
import { MainComponent } from './core/components/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
