import axios from "axios";
import {SettlementItemResponse, ItemResponse} from "@/client/types";



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
