import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'list',
    pathMatch: 'full',
    loadChildren: () => import('./list-files/list-files.module').then((m) => m.ListFilesModule)
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
