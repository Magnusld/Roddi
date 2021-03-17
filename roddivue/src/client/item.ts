import axios from "axios";
import {ItemResponse} from "@/client/types";

export async function getAllEstateItems(estateId: number): Promise<ItemResponse[]> {
    const estateItems = new Array<ItemResponse>()
    await axios.get('api/items/?estateID=' + estateId).then(response => {
        for (let i = 0; i < response.data.length; i++) {
            const item: ItemResponse = {
                id: response.data[i].id,
                name: response.data[i].name,
                description: response.data[i].description
            }
            estateItems.push(item)
        }
    })
    return estateItems
}

export async function getItemById(itemId: number): Promise<ItemResponse> {
    let item: ItemResponse
    await axios.get('api/items/'+ itemId).then( response => {
        const itemResponse: ItemResponse = {
            id: response.data.id,
            name: response.data.name,
            description: response.data.description
        }
        item = itemResponse
    })
    console.log(item!)
    return item!
}