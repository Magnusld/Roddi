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
    // put in all relevent user data, email, name etc, whatever we ask for in signup, and store.
}

export interface NewEstateRequest {
    name: string;
    participants: UserResponse[] | null;
}

export interface EstateResponse {
    id: number;
    name: string;
    participants: UserResponse[] | null;
    items: ItemResponse[] | null;
}

export interface NewItemRequest {
    name: string;
    description: string;
    belongsTo: number; //EstateId
}

export interface ItemResponse {
    id: number;
    name: string;
    description: string;
}

export interface ItemsRequest {
    navn: string;
    verdi: string;
    beskrivelse: string;
}

export interface NewUserItemVoteRequest {
    user: number;
    item: number;
    donate: boolean;
}

export interface NewUserItemPriorityRequest {
    user: number;
    item: number;
    priority: number;
}

export interface UserItemVoteResponse {
    id: number;
    user: number;
    item: number;
    donate: boolean;
}

export interface UserItemPriorityResponse {
    id: number;
    user: number;
    item: number;
    priority: number;
}