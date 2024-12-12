import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
 { path: 'app-home', component: MenuComponent },
  {
    path: 'curso',
    loadChildren: () => import('./curso/curso.module').then(m => m.CursoModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
