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
    auth.userSignUp.subscribe(() => {
      router.navigate(['/'])
    });
  }

  ngOnInit(): void {
  }

  signUp(form: NgForm) {
    this.auth.signUp(form.value.name, form.value.email, form.value.password);
  }
}
