import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() onNewUser = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  newUser(){
    this.onNewUser.emit();
  }

}
