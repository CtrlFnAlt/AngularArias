import {Injectable} from '@angular/core';
import {IUser} from "../Interfaces/iuser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: IUser[] = [
    {
      id: 1,
      name: "Armando",
      lastname: "Visone",
      email: "Armalio@gmail.com",
      codf: "CCCCCCCCCCCCCCCCC",
      phone: 3286666421,
      province: "Napoli",
      age: 26
    },
    {
      id: 2,
      name: "Rosy",
      lastname: "Mele",
      email: "Armalio@gmail.com",
      codf: "CCCCCCCCCCCCCCCCC",
      phone: 3286666421,
      province: "Napoli",
      age: 23
    },
    {
      id:3,
      name: "Daniele",
      lastname: "Cervo",
      email: "Armalio@gmail.com",
      codf: "CCCCCCCCCCCCCCCCC",
      phone: 3286666421,
      province: "Napoli",
      age: 28
    },
  ];

  constructor() {
  }

  getUsers() {
    return this.users;
  }

  getUser(id: number): IUser{
    return this.users.find(user => user.id === id);
  }

  deleteUsers(user: IUser){
    const index = this.users.indexOf(user);
    if (index >= 0) {
      this.users.splice(index, 1);
    }
  }

  updateUser(user: IUser){
    const index = this.users.findIndex((value) => value.id === user.id);
    alert(index);
    if(index !== -1){
      this.users[index] = user;
    }
  }

  createUser(user: IUser){
    this.users.splice(0,0,user);
  }
}
