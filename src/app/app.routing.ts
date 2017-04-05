import { Routes,RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { AddtasksComponent } from './tasks/addtasks.component';
const router:Routes=[

{path:'',redirectTo:'/home',pathMatch:'full'},
{path:'home',component:TasksComponent },
{path:'addAlunos',component:AddtasksComponent }
];
export const routes=RouterModule.forRoot(router);