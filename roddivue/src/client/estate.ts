import axios from "axios";
import {NewEstateRequest} from "@/client/types";

export async function createNewEstate(newEstateRequest: NewEstateRequest): Promise<void> {
    axios
        .post("api/estates/", { name: newEstateRequest.name })
        .then(response => {
            console.log(response)
        })
}