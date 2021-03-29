import axios from "axios";
import {store} from "@/store";
import {NewUserItemPriorityRequest, UserItemPriorityResponse} from "@/client/types";

export async function getLoggedInUserItemPriority(itemID: number): Promise<UserItemPriorityResponse> {
    let userItemPriorityResponse: UserItemPriorityResponse;
    await axios.get("api/itempriority/?itemID="+itemID).then(response => {
        console.log(response)
        if (! (response.data.length == 0)) {
            userItemPriorityResponse.id = response.data[0].id;
            userItemPriorityResponse.user = response.data[0].user;
            userItemPriorityResponse.item = response.data[0].item;
            if (response.data[0].priority instanceof Number) {
                userItemPriorityResponse.priority = response.data[0].priority;
            }
            else {
                userItemPriorityResponse.priority = 0;
            }
        }
    })
    return userItemPriorityResponse!;
}

export async function setUserItemPriority( newUserItemPriority: NewUserItemPriorityRequest): Promise<void> {
    console.log(newUserItemPriority)
    await axios.post("api/itempriority/", {
            user: newUserItemPriority.userId,
            item: newUserItemPriority.itemId,
            priority: newUserItemPriority.priority
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
