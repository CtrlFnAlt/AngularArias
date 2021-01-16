import {IUser} from "./iuser";

export interface IUserResponse {
  data: IUser;
  message: string;
  success: boolean;
}
