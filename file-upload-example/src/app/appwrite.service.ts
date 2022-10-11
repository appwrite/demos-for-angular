import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { environment } from '../environments/environment';

import { Client, Account, Storage } from 'appwrite';

@Injectable({
  providedIn: 'root'
})
export class AppwriteService {

  private readonly client = new Client();

  private readonly account = new Account(this.client);

  private readonly storage = new Storage(this.client);

  private readonly bucketId = environment.bucketId;

  constructor() {
    this.client
      .setEndpoint(environment.endpoint)
      .setProject(environment.project);
  }

  public listAllStorageFiles(): Observable<object> {
    return from(this.storage.listFiles(this.bucketId));
  }

  public downloadFileLink(id: string): URL {
    return this.storage.getFileDownload(this.bucketId, id);
  }

  public previewFile(fileId: string): URL {
    return this.storage.getFilePreview(this.bucketId, fileId, 100, 100, 'left');
  }

  public removeFile(id: string): Observable<object> {
    return from(this.storage.deleteFile(this.bucketId, id));
  }

  public uploadFile(file: File): Observable<object> {
    return from(this.storage.createFile(this.bucketId, file.name, file));
  }

  public dummyLogin(): Observable<object> {
    return from(
      this.account.createEmailSession('test@test.com', 'Password123')
    );
  }

  public getUser(): Observable<object> {
    return from(this.account.get());
  }
}
