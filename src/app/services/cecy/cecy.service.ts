import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Curso } from 'src/app/models/cecy/curso';

@Injectable({
  providedIn: 'root'
})
export class CecyService {

  constructor(private http:HttpClient) {}

    getCombos(url:string){
      return this.http.get(environment.API_URL_COMBOS_CECY + url);
    }
    getLis(url:string){
      return this.http.get<Curso[]>(environment.API_URL_COMBOS_CECY + url);
    }
}
