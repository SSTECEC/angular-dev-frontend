import { Routes } from '@angular/router';
import { CourseComponent } from './instructor/course/course.component';
import { FormComponent } from './instructor/form/form.component';

export const CecyRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'courses',
        component: CourseComponent
      },
      {
        path: 'forms',
        component: FormComponent
      }
    ]
  }
];