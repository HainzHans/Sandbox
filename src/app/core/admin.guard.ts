import { inject } from '@angular/core';
import { Router } from '@angular/router';
import {supabase} from './supabase.client';

export const adminGuard = async () => {
  const router = inject(Router);
  const session = await supabase.auth.getSession();

  if (session.data.session) {
    return true;
  }

  await router.navigate(['/admin-login']);
  return false;
};
