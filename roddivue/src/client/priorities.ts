import axios from "axios";
import {NewUserItemPriorityRequest, UserItemPriorityResponse} from "@/client/types";
import {store} from "@/store";

export async function getPriority(itemID: number): Promise<UserItemPriorityResponse> {
    let userItemPriorityResponse: UserItemPriorityResponse;
    axios
        .get("api/itempriority/?itemID="+itemID)
        .then(response => {
            if (!response.data.isEmpty()) {
                userItemPriorityResponse.id = response.data[0].id;
                userItemPriorityResponse.user = response.data[0].user;
                userItemPriorityResponse.item = response.data[0].item;
                userItemPriorityResponse.priority = response.data[0].priority;
            }

        })

    return userItemPriorityResponse!;
}

export async function addPriority( newUserItemPriority: NewUserItemPriorityRequest): Promise<void> {
    axios
        .post("api/itempriority/", {
            user: newUserItemPriority.user,
            item: newUserItemPriority.item,
            donate: newUserItemPriority.priority
        })
        .then(response => {
            console.log(response)
        })
}

export async function removePriority( id: number) {
    axios
        .delete("api/itempriority/"+id)
        .then(response => {
            console.log(response)
        })
}

export async function changePriority() {

}