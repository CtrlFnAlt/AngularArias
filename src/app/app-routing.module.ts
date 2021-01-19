import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./Components/users/users.component";
import {UserDetailComponent} from "./Components/user-detail/user-detail.component";
import {ShowUserComponent} from "./Components/show-user/show-user.component";
import {HttpClientModule} from "@angular/common/http";
import {RoutesGuardService} from "./Services/routes-guard.service";
import {LoginComponent} from "./Components/Auth/login/login.component";
import {RegisterComponent} from "./Components/Auth/register/register.component";


const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [RoutesGuardService]
  },
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
    canActivate: [RoutesGuardService]
  },
  {
    path: 'users/new',
    component: UserDetailComponent,
    canActivate: [RoutesGuardService]
  },
  {
    path: 'users/:id/edit',
    component: UserDetailComponent,
    canActivate: [RoutesGuardService]
  },
  {
    path: 'users/:id',
    component: ShowUserComponent,
    canActivate: [RoutesGuardService]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: RegisterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    HttpClientModule
  ],
  providers: [
    RoutesGuardService
  ],
  declarations: []
})
export class AppRoutingModule {
}
