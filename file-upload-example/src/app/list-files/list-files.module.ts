import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFilesRoutingModule } from './list-files-routing.module';
import { ListFilesComponent } from './list-files.component';
import { ListFilesResolver } from './list-files.resolver';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';

@NgModule({
  declarations: [ListFilesComponent],
  imports: [
    CommonModule,
    ListFilesRoutingModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule
  ],
  providers: [
    ListFilesResolver
  ]
})
export class ListFilesModule { }
