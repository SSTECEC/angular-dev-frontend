import { Component, OnInit } from '@angular/core';
import { CecyService } from 'src/app/services/cecy/cecy.service';
import { Curso } from 'src/app/models/cecy/curso';

@Component({
  selector: 'app-cecy-courses',
  templateUrl: './courses.component.html'
})
export class CoursesComponent implements OnInit {
  url_list = "list";
  
  lista_cursos : any = [];
  
  constructor(private cecyService: CecyService) { }

  ngOnInit(): void {
    this.cargarCursos();
  }

  public cargarCursos(){
    this.cecyService.get("list", "").subscribe(
      (res: any) => {
        console.log(res);
        this.lista_cursos = res;
      },
      err => {
        console.log(err);
      }
    );
  }

}
