import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NoticiasRoutingModule } from "./noticias-routing.module";
import { NoticiasComponent } from "./noticias.component";

@NgModule({
    declarations: [
        NoticiasComponent
    ],
    imports: [
        CommonModule,
        NoticiasRoutingModule,
        FormsModule
    ]
})
export class NoticiasModule {}