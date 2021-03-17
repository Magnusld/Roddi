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