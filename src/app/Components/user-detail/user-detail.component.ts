import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../Interfaces/iuser";
import {UserService} from "../../Services/user.service";
import {UserClass} from "../../Classes/user-class";
import {ActivatedRoute, Router} from "@angular/router";

//FontAwesome
import {faBroom, faSave, faUndo} from '@fortawesome/free-solid-svg-icons';

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
  patternEmail: string = '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])';

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
    this.route.paramMap.subscribe(
      (param) => {
        if (!param.get('id')) {
          return;
        }
        this.userService.getUser(+param.get('id')).subscribe((res) => {
          this.user = res.data;
        });
      });
  }

  resetForm(form) {
    if (this.user.id === 0) {
      this.user = new UserClass();
    } else {
      this.user = this.userCopy;
    }
  }

  formUser() {
    this.userService.updateUser(this.user).subscribe(
      res => {
        alert(res.message);
        if (res.success) {
          this.router.navigate(['users']);
        } else {
          alert(res.message);
        }
      });
  }

  createUser() {
    this.userService.createUser(this.user).subscribe(
      res => {
        alert(res.message);
        if (res.success) {
          this.router.navigate(['users']);
        }
      });
  }

  saveUser() {
    if (this.user.id > 0) {
      this.formUser();
    } else {
      this.createUser();
    }
  }

  backToUsers() {
    this.router.navigate(['users'])
  }
}
