import { Component, OnInit } from '@angular/core';
import { CecyService } from 'src/app/services/cecy/cecy.service';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html'
})
export class InstructorComponent implements OnInit {

  constructor(private cecyService: CecyService) { }

  ngOnInit(): void {
  }

  

}
