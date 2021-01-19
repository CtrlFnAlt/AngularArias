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

  async signUp(form: NgForm) {
    try {
      const res = await this.auth.signUp(form.value.name, form.value.email, form.value.password).toPromise();
      this.router.navigate(['/']).then();
    }catch(e){
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
