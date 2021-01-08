import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UsersComponent} from './Components/users/users.component';
import {UserComponent} from './Components/user/user.component';
import {UserService} from "./Services/user.service";
import {UserDetailComponent} from './Components/user-detail/user-detail.component';
import {FormsModule} from "@angular/forms";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './Components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailComponent,
    NavbarComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
