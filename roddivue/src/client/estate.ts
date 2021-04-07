import axios from "axios";
import {EstateResponse, ItemResponse, NewEstateRequest, UserResponse} from "@/client/types";
import {getAllItems} from "@/client/item";
import {getAllUsers} from "@/client/user";

export async function createNewEstate(newEstateRequest: NewEstateRequest): Promise<void> {
    axios
        .post("api/estates/", { name: newEstateRequest.name })
        .then(response => {
            console.log(response)
        })
}

export async function getAllEstates(): Promise<EstateResponse[]> {
    const estates = new Array<EstateResponse>()
    await axios.get('api/estates/').then(async response => {
        for (let i = 0; i < response.data.length; i++) {
            const estate: EstateResponse = {
                id: response.data[i].id,
                name: response.data[i].name,
                participants: null,
                items: null
            }
            //console.log(response.data[i])
            estates.push(estate)
        }
        //console.log(estates[0])
    })
    return estates
}

export async function getUserById(id: number): Promise<UserResponse> {
    let userResponse: UserResponse;
    await axios.get('api/UserList/' + id).then(response => {
        const user: UserResponse = {
            id: response.data.id,
            username: response.data.username,
        }
        userResponse = user
    })
    return userResponse!
}

export async function getEstateById(id: number): Promise<EstateResponse> {
    let estateResponse: EstateResponse;
    await axios.get('api/estates/' + id).then(response => {
        const estate: EstateResponse = {
            id: response.data.id,
            name: response.data.name,
            participants: null,
            items: null,
        }
        estateResponse = estate
    })
    await getAllUsers(estateResponse!.id).then(response => {
        estateResponse.participants = response
    })
    await getAllItems(estateResponse!.id).then(response => {
        estateResponse.items = response
    })
    return estateResponse!
}

export async function settleEstate(id: number): Promise<void> {
    await axios.get('/api/settleEstate/?estateID=' + id).then(response => {
        console.log(response)
    })
}

