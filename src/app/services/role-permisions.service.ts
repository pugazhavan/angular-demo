import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { ConstantsMessages } from "./../constant-messages";

@Injectable()
export class RolePermisionsService {

  constructor(private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		console.log(next);
    console.log(state);

    // if (state.url != ConstantsMessages.ROUTING_PAGE.INDEX_PAGE || state.url != '/'+ConstantsMessages.ROUTING_PAGE.INDEX_PAGE) {
    //   this.router.navigate([ConstantsMessages.ROUTING_PAGE.INDEX_PAGE]);
    //   return false;
    // }
    // else
      return true;
  }

}
