import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListFilesComponent } from './list-files.component';
import { listFilesResolver } from './list-files.resolver';

const routes: Routes = [
  {
    path: '',
    component: ListFilesComponent,
    resolve: {
      files: listFilesResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListFilesRoutingModule {}
