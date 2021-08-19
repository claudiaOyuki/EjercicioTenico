import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Noticias } from '../entidades/noticias';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
  'X-Api-Key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  private ejecutarQuery<T>(query: string) {
    query = apiUrl + query;
    return this.http.get<T>(query, { headers });
  }

  getNoticias(categoria:any, pais:any) {
    if(categoria == null || categoria == undefined || categoria == ''){
      categoria = 'general';
    }

    if(pais == null || pais == undefined || pais == ''){
      pais = 'mx';
    }
    return this.ejecutarQuery<Noticias>(`/top-headlines?country=${pais}&category=${categoria}&apiKey=a35666ccded640dea10faf9280dd3b3f`);
    // return this.http.get<Noticias>(`https://newsapi.org/v2/top-headlines?country=de&category=all&apiKey=a35666ccded640dea10faf9280dd3b3f`)
  }

}
