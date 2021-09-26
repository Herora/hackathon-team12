import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { JwtService } from '../services/JwtService/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private readonly jwt: JwtService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const token = sessionStorage.getItem('token');
      let result = token ? this.jwt.getTokenExpired(token) : false;
      console.log(next);
      if (!result) {
        this.router.navigate(['/']);
      }
    return result;
  }
  
}
