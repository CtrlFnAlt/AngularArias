import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../Interfaces/iuser";
import {UserService} from "../../Services/user.service";
import {UserClass} from "../../Classes/user-class";
import {ActivatedRoute, Router} from "@angular/router";

//FontAwesome
import {faSave, faUndo, faBroom} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  //FontAwesome
  faSave = faSave;
  faUndo = faUndo;
  faBroom = faBroom;
  back: string = 'Indietro';
  reset: string = 'Resetta';
  save: string = 'Salva';

  private userCopy: IUser;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
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
        if (!param.id) {
          return;
        }
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
    this.router.navigate(['users']);
  }

  backToUsers() {
    this.router.navigate(['users'])
  }
}
