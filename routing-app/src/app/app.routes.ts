import { Routes } from "@angular/router";
import { AddUserComponent } from "./pages/add-user/add-user.component";
import { ListUsersComponent } from "./pages/list-users/list-users.component";
import { RemoveUserComponent } from "./pages/remove-user/remove-user.component";
import { EditUserComponent } from "./pages/edit-user/edit-user.component";
import { AdminComponent } from "./pages/admin/admin.component";
import { LoginComponent } from "./login/login.component";
import { authGuard } from "./auth.guard";
import { editGuard } from "./edit.guard";
import { inject } from "@angular/core";
import { AuthService } from "./auth.service";

export const routes:Routes=[
    {path:"adduser",component:AddUserComponent},
    {path:"users",component:ListUsersComponent},
    {path:"remove",component:RemoveUserComponent},
    {path:"edit",component:EditUserComponent,canDeactivate:[editGuard]},
    {path:"login",component:LoginComponent},
    {path:"admin",loadComponent:()=>import('./pages/admin/admin.component').then(m=>m.AdminComponent),data:{"preload":true},canActivate:[authGuard]},
    {path:"store",loadChildren:()=>import('./store/store.module').then(m=>m.StoreModule),data:{"preload":true}},
    {path:"store2",loadChildren:()=>import('./store/app.routes').then(m=>m.CHILD_ROUTES)},
    {path:"superuser",redirectTo:()=>{
        return inject(AuthService).isLoggedIn()?'/store':'/login'
    },pathMatch:"full"}
]