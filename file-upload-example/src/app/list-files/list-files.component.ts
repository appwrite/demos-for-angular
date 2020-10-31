import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { concatMap, map, tap } from 'rxjs/operators';
import { AppwriteService } from '../appwrite.service';
import * as fileSize from 'filesize';

@Component({
  selector: 'app-list-files',
  templateUrl: './list-files.component.html',
  styleUrls: ['./list-files.component.scss']
})
export class ListFilesComponent implements OnInit {

  public files: [] = [];

  constructor(
    private route: ActivatedRoute,
    private appwriteService: AppwriteService
  ) { }

  public ngOnInit(): void {
    this.route.data.pipe(
      tap((c) => console.log(c)),
      map((data) => data.files)
    ).subscribe((files) => this.files = files['files']);

    this.appwriteService.getUser().subscribe(() => {}, (err) => {
      this.appwriteService.dummyLogin().subscribe();
    });
  }

  public downloadFileLink(id: string): string {
    return this.appwriteService.downloadFileLink(id);
  }

  public previewFileSource(id: string): string {
    return this.appwriteService.previewFile(id);
  }

  public removeFile(id: string): void {
    this.appwriteService.removeFile(id).pipe(concatMap(() => this.loadFiles())).subscribe((files) => this.files = files['files']);
  }

  private loadFiles(): Observable<object> {
    return this.appwriteService.listAllStorageFiles();
  }

  public onFileSelected(file: File): void {
    this.appwriteService.uploadFile(file).pipe(concatMap(() => this.loadFiles())).subscribe((files) => this.files = files['files']);
  }

  public formatFileSize(size: string): string {
    return fileSize(+size);
  }

}
