import { Component, OnInit } from '@angular/core';
import {UserService} from "../../Services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  Title: string = "User Component";

  users: any[] = [];


  constructor(private service: UserService) {
  }

  ngOnInit(): void {
    this.users = this.service.getUsers();
  }

}
