import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { AppwriteService } from '../appwrite.service';

export const listFilesResolver: ResolveFn<object> = () =>
  inject(AppwriteService).listAllStorageFiles();
