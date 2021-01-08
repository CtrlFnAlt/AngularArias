import {IUser} from "../Interfaces/iuser";

export class UserClass implements IUser {
  age: number;
  codf: string;
  email: string;
  id: number;
  lastname: string;
  name: string;
  phone: number;
  province: string;

  constructor() {
    this.age = 0;
    this.codf = '';
    this.email = '';
    this.id = 0;
    this.lastname = '';
    this.name = '';
    this.phone = 0;
    this.province = '';
  }
}
