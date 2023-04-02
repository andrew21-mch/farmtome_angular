export interface User {

}

export interface UserLoginRequest {
    email: string;
    password: string;
}

export interface UserRegisterRequest {
    name: string;
    email: string;
    phone:  string;
    location: string;
    password: string;
    confirmPassword: string
}