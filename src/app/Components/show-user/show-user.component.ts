import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IUser} from "../../Interfaces/iuser";
import {UserService} from "../../Services/user.service";

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.scss']
})
export class ShowUserComponent implements OnInit {

  private user: IUser;

  constructor(private routes: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.routes.params.subscribe(param => {
     return this.user = this.userService.getUser(+param.id)
    });
  }

}
