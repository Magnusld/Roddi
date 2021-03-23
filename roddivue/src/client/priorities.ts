import axios from "axios";
import {store} from "@/store";
import {NewUserItemPriorityRequest, UserItemPriorityResponse} from "@/client/types";

export async function getLoggedInUserItemPriority(itemID: number): Promise<UserItemPriorityResponse> {
    let userItemPriorityResponse: UserItemPriorityResponse;
    axios.get("api/itempriority/?itemID="+itemID).then(response => {
            if (!response.data.isEmpty()) {
                userItemPriorityResponse.id = response.data[0].id;
                userItemPriorityResponse.user = response.data[0].user;
                userItemPriorityResponse.item = response.data[0].item;
                userItemPriorityResponse.priority = response.data[0].priority;
            }
        })
    return userItemPriorityResponse!;
}

export async function setUserItemPriority( newUserItemPriority: NewUserItemPriorityRequest): Promise<void> {
    console.log(newUserItemPriority)
    await axios.post("api/itempriority/", {
            user: newUserItemPriority.userId,
            item: newUserItemPriority.itemId,
            donate: newUserItemPriority.priority
        }).then(response => {
            console.log(response)
        })
}

export async function removeUserItemPriority(id: number) {
    await axios.delete("api/itempriority/"+id)
        .then(response => {
            console.log(response)
        })
}
