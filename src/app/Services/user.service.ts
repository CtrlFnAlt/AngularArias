import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }

  getUsers() {
    return [
      {
        name: "Armando",
        lastname: "Visone",
        email: "Armalio@gmail.com",
        codf: "CCCCCCCCCCCCCCCCC",
        phone: 3286666421,
        province: "Napoli",
        age: 26
      },
      {
        name: "Rosy",
        lastname: "Mele",
        email: "Armalio@gmail.com",
        codf: "CCCCCCCCCCCCCCCCC",
        phone: 3286666421,
        province: "Napoli",
        age: 23
      },
      {
        name: "Daniele",
        lastname: "Cervo",
        email: "Armalio@gmail.com",
        codf: "CCCCCCCCCCCCCCCCC",
        phone: 3286666421,
        province: "Napoli",
        age: 28
      },
    ];
  }
}
