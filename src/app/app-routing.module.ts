import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EgyptnewsComponent } from './egyptnews/egyptnews.component';
import { UsanewsComponent } from './usanews/usanews.component';


const routes: Routes = [

{path:"egypt" ,component:EgyptnewsComponent},

{path:"usa" ,component:UsanewsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
