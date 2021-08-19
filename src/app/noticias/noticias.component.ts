import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ["./noticias.component.css"]
})
export class NoticiasComponent implements OnInit {
  listNoticias = new Array();
  fechaAct= new Date();

  categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  pais= ['Canadá','EEUU', 'México'];
  categoriaSele:any = undefined;
  paisSele:any = undefined;
  catSele:any = 'general';
  paisSel:any = undefined;

  constructor(private noticiasService: NoticiasService) { }

  ngOnInit(): void {
    this.obtenerNoticias();
    console.log('fechaAct', this.fechaAct);
  }

  obtenerNoticias() {
    this.noticiasService.getNoticias(this.categoriaSele, this.paisSele).subscribe(resp => {
      if(resp.status == "ok") {
        this.listNoticias = resp.articles;
      }
    })
  }

  onChangePais(paisSel:any) {
    this.paisSele = paisSel;
    if(paisSel == 'Mexico') {
      this.paisSele = 'mx';
    } else if(paisSel == 'EEUU'){
      this.paisSele = 'us';
    }else if(paisSel == 'Canadá'){
      this.paisSele = 'ca';
    }
    this.obtenerNoticias();
  }

  onChangeCategoria(catSel: any) {
     this.categoriaSele = catSel;
     this.obtenerNoticias();

  }

  obtenerFecha() {
    
  }
}
