import axios from "axios";
import {EstateResponse, NewEstateRequest} from "@/client/types";

export async function createNewEstate(newEstateRequest: NewEstateRequest): Promise<void> {
    axios
        .post("api/estates/", { name: newEstateRequest.name })
        .then(response => {
            console.log(response)
        })
}
/*

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

 */