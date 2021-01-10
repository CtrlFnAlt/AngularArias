import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IUser} from "../../Interfaces/iuser";
import {UserService} from "../../Services/user.service";
import {faUndoAlt} from "@fortawesome/free-solid-svg-icons";
import {UserClass} from "../../Classes/user-class";

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.scss']
})
export class ShowUserComponent implements OnInit {
  Title: string = 'Dettagli Utenti';
  user: IUser;
  faUndoAlt = faUndoAlt;
  back: string = 'Indietro';

  constructor(private routes: ActivatedRoute, private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.user = new UserClass();
    this.routes.params.subscribe(param => {
      if (!param.id) {
        return;
      }
      this.user = this.userService.getUser(+param.id)
    });
  }

  backToUsers() {
    this.router.navigate(['users'])
  }
}
