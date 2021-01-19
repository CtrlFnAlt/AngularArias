export interface IJwt {
  access_token: string;
  token_type: string;
  expires_in: number;
  username: string;
  email: string;
}
