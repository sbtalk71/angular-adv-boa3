import { ActivatedRouteSnapshot, MaybeAsync, RedirectCommand, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Product } from "./product.model";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { inject } from "@angular/core";


export const productResolver: ResolveFn<Product[]> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const auth = inject(AuthService)
  return auth.getAllProducts();
};

