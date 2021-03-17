import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { CecyService } from '../../../../services/cecy/cecy.service'
import {Requisito} from 'src/app/models/cecy/models.index'
import { Carrera, Periodo } from 'src/app/models/cecy/requisito';


@Component({
    selector: 'app-cecy-form',
    templateUrl: './form.component.html',
})
export class FormsComponent implements OnInit {
 
  public selected_carrers: Carrera = {id:0, name: ''};
  public carrer: Carrera [];
  public academic_periods: Periodo[];

  private dato;
  url_combo = "combo";
    constructor( private cecyService:CecyService) {
    }

    ngOnInit() {
      this.getInfo();
    }
    getInfo(){
      this.cecyService.getCombos(this.url_combo).subscribe(
        res =>{
          console.log(res);
          this.dato=res;
        },
        err=>console.log(err)
      )
    }
  

      
    
}
