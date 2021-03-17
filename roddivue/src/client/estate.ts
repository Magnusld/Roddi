import axios from "axios";
import {EstateResponse, ItemResponse, NewEstateRequest, UserResponse} from "@/client/types";
import {getAllEstateItems} from "@/client/item";

export async function createNewEstate(newEstateRequest: NewEstateRequest): Promise<void> {
    axios
        .post("api/estates/", { name: newEstateRequest.name })
        .then(response => {
            console.log(response)
        })
}

export function getAllEstates(): EstateResponse[] {
    const estates = new Array<EstateResponse>()
    console.log(axios.get('api/estates/'))
    axios.get('api/estates/').then(response => {
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
    }).catch(error => {
        console.log(JSON.stringify(error))
    })
    console.log(estates)
    return estates
}

export async function getEstateById(id: number): Promise<EstateResponse> {
    let estateResponse: EstateResponse;
    await axios.get('api/estates/' + id).then(response => {
        const estate: EstateResponse = {
            id: response.data.id,
            name: response.data.name,
            participants: null,
            items: null
        }
        estateResponse = estate
    })
    await getAllEstateItems(estateResponse!.id).then(response => {
        estateResponse.items = response
    })
    console.log(estateResponse!)
    return estateResponse!
}