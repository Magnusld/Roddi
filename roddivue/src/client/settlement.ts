import axios from "axios";
import {ItemResponse, EstateResponse} from "@/client/types";
import {getAllUsers} from "@/client/user";
import {getAllItems} from "@/client/item";

export async function getAllSettlements(): Promise<EstateResponse[]> {
    const estates = new Array<EstateResponse>()
    await axios.get('api/settlements/').then(async response => {
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

export async function getSettlementById(id: number): Promise<EstateResponse> {
    let estateResponse: EstateResponse;
    await axios.get('api/settlements/' + id).then(response => {
        const estate: EstateResponse = {
            id: response.data.id,
            name: response.data.name,
            participants: null,
            items: null,
        }
        estateResponse = estate
    })
    await getAllUsers(estateResponse!.id, true).then(response => {
        estateResponse.participants = response
    })
    await getAllItems(estateResponse!.id).then(response => {
        estateResponse.items = response
    })
    return estateResponse!
}
