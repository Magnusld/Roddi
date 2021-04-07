import axios from "axios";
import {SettlementItemResponse, ItemResponse, EstateResponse} from "@/client/types";
import {getAllEstateUsers} from "@/client/user";
import {getAllEstateItems} from "@/client/item";

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
    await getAllEstateUsers(estateResponse!.id).then(response => {
        estateResponse.participants = response
    })
    await getAllEstateItems(estateResponse!.id).then(response => {
        estateResponse.items = response
    })
    return estateResponse!
}

export async function getAllSettlementItems(estateId: number): Promise<SettlementItemResponse[]> {
    const estateItems = new Array<SettlementItemResponse>()
    await axios.get('api/items/?estateID=' + estateId).then(response => {
        for (let i = 0; i < response.data.length; i++) {
            const item: SettlementItemResponse = {
                itemId: response.data[i].id,
                name: response.data[i].name,
                value: response.data[i].value,
                description: response.data[i].description,
                owner: response.data[i].owner,
                throwDonate: response.data[i].throwDonate
            }
            estateItems.push(item)
        }
    })
    return estateItems
}
