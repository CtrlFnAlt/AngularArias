import {IUser} from "./iuser";

export interface IUsersResponse {
  data: IUser[];
  message: string;
  success: boolean;
}
