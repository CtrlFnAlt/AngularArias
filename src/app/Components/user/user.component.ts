import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from "../../Services/user.service";
import {IUser} from "../../Interfaces/iuser";

//FontAwesome
import {faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input('userdata') user: IUser;
  @Output('userOutput') userOutput = new EventEmitter;
  @Output('userSelected') onSelectUser = new EventEmitter;

  //FonAwesome
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  update: string = 'Modifica';
  delete: string = 'Elimina';

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
  }

  deleteUser() {
    this.userOutput.emit(this.user);
    // this.userService.deleteUsers(this.user);
  }

  updateUser() {
    this.onSelectUser.emit(this.user);
  }
}
