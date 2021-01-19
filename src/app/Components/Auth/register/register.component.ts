import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../../Services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  singUp(form: NgForm) {
    let result = this.auth.signUp(form.value.name, form.value.email, form.value.password);
    if (!result) {
      return;
    } else {
      this.router.navigate(['users']).then();
    }
  }
}
