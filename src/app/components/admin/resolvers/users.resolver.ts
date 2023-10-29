import { ResolveFn } from '@angular/router';
import { IUser } from '../user.interface';
import { inject } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { delay } from 'rxjs';

export const usersResolver: ResolveFn<IUser[]> = (route, state) => {
  const adminService = inject(AdminService);

  return adminService.getPersonalList().pipe(delay(2000));
};
