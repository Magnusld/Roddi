import axios from "axios";
import {EstateResponse, UserResponse} from "@/client/types";

export async function getAllEstateUsers(estateId: number): Promise<UserResponse[]> {
    let estateUserIDs = new Array<number>()
    await axios.get('api/estates/' + estateId).then(response => {
            const users = {
                participants: response.data.participants,
            }
            estateUserIDs = users.participants;
    })
    const estateUsers = new Array<UserResponse>()
    await axios.get('api/users/').then(response => {
        for (let i = 0; i < response.data.length; i++) {
            const user: UserResponse = {
                id: response.data[i].id,
                username: response.data[i].username,
            }
            if(estateUserIDs.includes(user.id)){
                estateUsers.push(user)
            }
        }
    })
    return estateUsers
}

export async function getUserById(userId: number): Promise<UserResponse> {
    let user: UserResponse
    await axios.get('api/users/'+ userId).then( response => {
        const userResponse: UserResponse = {
            id: response.data.id,
            username: response.data.username,
        }
        user = userResponse
    })
    console.log(user!)
    return user!
}

export async function getCurrentUserId(): Promise<number> {
    let id: number;
    await axios.get('api/UserId/').then( response => {
        id = response.data[0].id;
    })
    return id!;
}