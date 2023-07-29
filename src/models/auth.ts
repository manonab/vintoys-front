export interface user{
     id: string;
     username: string;
     email: string;
     password: string;
}
export type Auth = {
     email: string;
     password: string;
 };

export interface UserData{
  accessToken: string;
  username: string;
};
export interface AuthPayload {
  data: {
    message: string;
    user_id: number;
    user_token: string;
    user_name: string;
  };
  headers: Headers;
}
export interface ApiResponse {
  message: string;
  user_id: number;
  user_token: string;
  user_name: string;
}

 export interface SignUpParams {
     username: string;
     email: string;
     password: string;
 }