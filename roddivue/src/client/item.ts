import axios from "axios";
import {ItemResponse, NewItemRequest} from "@/client/types";

export async function getAllItems(estateId: number): Promise<ItemResponse[]> {
    const estateItems = new Array<ItemResponse>()
    await axios.get('api/items/?estateID=' + estateId).then(response => {
        for (let i = 0; i < response.data.length; i++) {
            const item: ItemResponse = {
                id: response.data[i].id,
                name: response.data[i].name,
                value: response.data[i].value,
                description: response.data[i].description,
                owner: response.data[i].given_to,
                throwDonate: response.data[i].donated_or_thrown
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
            value: response.data.value,
            description: response.data.description,
            owner: response.data.given_to,
            throwDonate: response.data.donated_or_thrown
        }
        item = itemResponse
    })
    console.log(item!)
    return item!
}

export async function createNewItem(item: NewItemRequest): Promise<void> {
    console.log(item)
    await axios.post('api/items/',
        // eslint-disable-next-line @typescript-eslint/camelcase
        {name: item.name, description: item.description, value: item.value,  belongs_to: item.belongsTo}).then( promise => {
        console.log(promise)
    })
}
