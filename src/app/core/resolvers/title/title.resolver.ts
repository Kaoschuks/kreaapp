import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';

export const titleResolver: ResolveFn<boolean> = (route, state) => {
  const router: Router = inject(Router);
  return true;
};
