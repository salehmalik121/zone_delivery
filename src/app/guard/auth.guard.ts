import { inject } from '@angular/core';
import { CanActivateFn , RouterStateSnapshot , ActivatedRouteSnapshot , Router  } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route : ActivatedRouteSnapshot, state: RouterStateSnapshot , ) => {
  const router : Router = new Router();
  const id = sessionStorage.getItem('signature');
  if(id==null){
    router.navigateByUrl("notAllowed")
    return false
  }else{
    return inject(AuthService).isValidUser(id);
  }
  
};
