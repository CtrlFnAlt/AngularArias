import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from "../../Services/user.service";
import {IUser} from "../../Interfaces/iuser";

//FontAwesome
import {faEdit, faInfoCircle, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {Router} from "@angular/router";

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
  faInfoCircle = faInfoCircle;
  update: string = 'Modifica';
  delete: string = 'Elimina';
  info: string = 'Informazioni';

  constructor(private userService: UserService, private route: Router) {
  }

  ngOnInit(): void {
  }

  deleteUser() {
    this.userOutput.emit(this.user);
    // this.userService.deleteUsers(this.user);
  }

  updateUser() {
    this.route.navigate(['users/', this.user.id, 'edit']);
    // this.onSelectUser.emit(this.user);
  }

  infoUser() {
    this.route.navigate(['users/', this.user.id]);
    this.onSelectUser.emit(this.user);
  }
}
