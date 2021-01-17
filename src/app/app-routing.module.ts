import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./Components/users/users.component";
import {UserDetailComponent} from "./Components/user-detail/user-detail.component";
import {ShowUserComponent} from "./Components/show-user/show-user.component";
import {HttpClientModule} from "@angular/common/http";
import {RoutesGuardService} from "./Services/routes-guard.service";
import {LoginComponent} from "./Components/Auth/login/login.component";


const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'users/new',
    component: UserDetailComponent
  },
  {
    path: 'users/:id/edit',
    component: UserDetailComponent,
    canActivate: [RoutesGuardService]
  },
  {
    path: 'users/:id',
    component: ShowUserComponent
  },
  {
    path: 'login',
    component: LoginComponent
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
