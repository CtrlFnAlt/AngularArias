import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {UserService} from "../../Services/user.service";
import {IUser} from "../../Interfaces/iuser";
import {UserClass} from "../../Classes/user-class";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Output() updateUser = new EventEmitter();
  Title: string = "User Component";
  users: IUser[] = [];

  constructor(private service: UserService) {
  }

  ngOnInit(): void {
    this.service.getUsers().subscribe(
      (res) => {
        this.users = res.data;
      });
  }

  onDeleteUser(user: IUser){
    this.service.deleteUsers(user).subscribe(res =>{
      alert(res.message);
      this.service.getUsers().subscribe(res => {this.users = res.data});
    }, error => console.log(error));
  }

  onSelectUser(user: UserClass){
    const userCopy = Object.assign({}, user);
    this.updateUser.emit(userCopy);
  }

}
