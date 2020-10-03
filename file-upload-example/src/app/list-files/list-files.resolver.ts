import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AppwriteService } from '../appwrite.service';

@Injectable({ providedIn: 'root' })
export class ListFilesResolver implements Resolve<object> {

  constructor(
    private readonly appwriteService: AppwriteService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<object> | Promise<object> | object {
    return this.appwriteService.listAllStorageFiles();
  }
}
