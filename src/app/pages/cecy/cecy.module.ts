import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './instructor/course/course.component';
import { FormComponent } from './instructor/form/form.component';
import { RouterModule } from '@angular/router';
import { CecyRoutes } from './cecy.routing';
import { CecyService } from '../../services/cecy/cecy.service';

@NgModule({
  declarations: [
    CourseComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CecyRoutes),
  ],
  providers: [
    CecyService,
  ],
})
export class CecyModule { }
