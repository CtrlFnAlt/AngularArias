import {Component, OnInit} from '@angular/core';
import {IUser} from "../../../Interfaces/iuser";
import {NgForm} from "@angular/forms";
import {AuthService} from "../../../Services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: IUser;

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  /*signIn(form: NgForm) {
    if (!form.valid) {
      return false;
    }
    this.auth.signIn(form.value.email, form.value.password).subscribe(
      (payload: IJwt) => {
        alert('Login Successful');
        this.router.navigate(['/']).then();
      },
      (error) => {
        alert(error.error);
        console.log(error);
      });
  }*/

  async signIn(form: NgForm) {
    if (!form.valid) {
      return false;
    }
    try {
      const res = await this.auth.signIn(form.value.email, form.value.password).toPromise();
      alert(res.username + ' logged in successully');
      this.router.navigate(['/']).then();
    } catch (e) {
      switch (e.status) {
        case 401:
          alert(e.error.error);
          break;
        case 404:
          alert(e.statusText);
          break;
        case 500:
          alert('Errore mentre contattavo il Server!');
          break;
      }
    }
  }
}
