import { ResolveFn, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { inject } from '@angular/core';
import { IUser } from '../user.interface';
import { EMPTY, catchError, delay } from 'rxjs';

export const userResolver: ResolveFn<IUser> = (route, state) => {
  const router = inject(Router);
  const adminService = inject(AdminService);

  return adminService.getPerson(route.params?.['id']).pipe(
    delay(2000),
    catchError(() => {
      router.navigate(['admin/contacts']);
      return EMPTY;
    })
  );
};
