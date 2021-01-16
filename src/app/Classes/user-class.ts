import {IUser} from "../Interfaces/iuser";

export class UserClass implements IUser {
  age: number;
  fiscalcode: string;
  email: string;
  id: number;
  lastname: string;
  name: string;
  phone: number;
  province: string;

  constructor() {
    this.age = 0;
    this.fiscalcode = '';
    this.email = '';
    this.id = 0;
    this.lastname = '';
    this.name = '';
    this.phone = 0;
    this.province = '';
  }
}
