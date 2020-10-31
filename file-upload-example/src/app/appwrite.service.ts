import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { environment } from '../environments/environment';
// import appwrite
import * as Appwrite from 'appwrite';

@Injectable({
  providedIn: 'root'
})
export class AppwriteService {

  private readonly sdk = new Appwrite();

  constructor() {
    this.sdk.setEndpoint(environment.endpoint);
    this.sdk.setProject(environment.project);
  }

  public listAllStorageFiles(): Observable<object> {
    return from(this.sdk.storage.listFiles(null, null, null, null));
  }

  public downloadFileLink(id: string): string {
    return this.sdk.storage.getFileDownload(id);
  }

  public previewFile(id: string): string {
    return this.sdk.storage.getFilePreview(id, 100, 100, null, 'fff', null);
  }

  public removeFile(id: string): Observable<object> {
    return from(this.sdk.storage.deleteFile(id));
  }

  public uploadFile(file: File): Observable<object> {
    return from(this.sdk.storage.createFile(file, ['*'], ['*']));
  }

  public dummyLogin(): Observable<object> {
    return from(this.sdk.account.createSession('test@test.com', 'Password123'));
  }

  public getUser(): Observable<object> {
    return from(this.sdk.account.get());
  }

}
