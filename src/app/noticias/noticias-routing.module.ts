import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NoticiasComponent } from "./noticias.component";

const routes: Routes = [
  {
    path: 'noticias',
    component: NoticiasComponent
    // children: [
    //   {
    //     path: 'noticias',
    //     component: NoticiasComponent
    //   },
    //   {
    //     path: '**',
    //     redirectTo: 'noticias'
    //   }
    // ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class NoticiasRoutingModule { }
