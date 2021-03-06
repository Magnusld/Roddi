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
    value: number;
    description: string;
    belongsTo: number; //EstateId
}

export interface ItemResponse {
    id: number;
    name: string;
    value: number;
    description: string;
    owner?: number | null;
    throwDonate?: string | null;
}


export interface ItemDisplay {
    itemId: number;
    name: string;
    value: number;
    estateName: string;
    userPriority: any;
}


export interface NewUserItemVoteRequest {
    userId: number;
    itemId: number;
    donate: boolean;
}

export interface NewUserItemPriorityRequest {
    userId: number;
    itemId: number;
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

export interface UserGetItem {
    userId: number;
    userName: string;
    items: ItemResponse[];
}

export interface UserVote {
    userId: number;
    itemId: number;
    vote: number | string;
    userName: string;
}