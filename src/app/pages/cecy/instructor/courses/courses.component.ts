import { Component, OnInit } from '@angular/core';
import { CecyService } from 'src/app/services/cecy/cecy.service';
import { Curso } from 'src/app/models/cecy/curso';

@Component({
  selector: 'app-cecy-courses',
  templateUrl: './courses.component.html'
})
export class CoursesComponent implements OnInit {
  url_list = "list";
  courses:Curso[];
  constructor(private cecyService:CecyService) { }

  ngOnInit() {
    this.getListCourse();
  }

  getListCourse(){
    this.cecyService.getLis(this.url_list).subscribe(res=>{
        this.courses = res;
        console.log(res);
    });
  }
}
