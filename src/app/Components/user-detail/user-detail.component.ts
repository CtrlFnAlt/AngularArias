import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../Interfaces/iuser";
import {UserService} from "../../Services/user.service";
import {UserClass} from "../../Classes/user-class";

//FontAwesome
import {faSave, faUndo} from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  //FontAwesome
  faSave = faSave;
  faUndo = faUndo;
  reset: string = 'Resetta';
  save: string = 'Salva';

  private userCopy: IUser;

  constructor(private userService: UserService, private route: ActivatedRoute) {
  }

  private _user: IUser;

  get user() {
    return this._user;
  }

  @Input() set user(user: IUser) {
    this._user = user;
    this.userCopy = Object.assign({}, user);
  }

  ngOnInit(): void {
    this.user = new UserClass();
    this.route.params.subscribe(
      (param) => {

        this.user = this.userService.getUser(+param.id);
      });
  }

  resetForm(form) {
    if (this.user.id === 0) {
      this.user = new UserClass();
    } else {
      this.user = this.userCopy;
    }
  }

  saveUser() {
    if (this.user.id > 0) {
      this.userService.updateUser(this.user);
    } else {
      this.userService.createUser(this.user);
    }
  }

}
