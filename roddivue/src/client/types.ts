export interface LogInRequest {
    username: string;
    password: string;
}

export interface SignUpRequest {
    email: string;
    username: string;
    password: string;
}

export interface LogInResponse {
    user: UserResponse;
    token: string;
}

export interface UserResponse {
    id: number;
    username: string;
    admin: boolean;
    // put in all relevent user data, email, name etc, whatever we ask for in signup, and store.
}