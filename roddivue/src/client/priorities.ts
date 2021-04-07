import axios from "axios";
import {store} from "@/store";
import {NewUserItemPriorityRequest, UserItemPriorityResponse, UserVote} from "@/client/types";
import {getUserById} from "@/client/user";

export async function getLoggedInUserItemPriority(itemID: number): Promise<UserItemPriorityResponse> {
    const userItemPriorityResponse: UserItemPriorityResponse = {id: 0, user: 0, item: 0, priority: 0}
    await axios.get("api/itempriority/?itemID="+itemID).then(response => {
        console.log(response)
        if (! (response.data.length == 0)) {
            userItemPriorityResponse.id = response.data[0].id;
            userItemPriorityResponse.user = response.data[0].user;
            userItemPriorityResponse.item = response.data[0].item;
            userItemPriorityResponse.priority = response.data[0].priority;
        }
    })
    console.log(userItemPriorityResponse)
    return userItemPriorityResponse;
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

export async function getAllItemPriority(id: number): Promise<UserVote[]> {
    const UserVotes: UserVote[] = []
    await axios.get('/api/allpriorities/?itemID=' + id).then(response => {
        for (let i = 0; i < response.data.length; i++) {
            const vote: UserVote = {
                userId: response.data[i].user,
                itemId: response.data[i].item,
                vote: response.data[i].priority,
                userName: ""
            }
            UserVotes.push(vote)
        }
    })
    return UserVotes
}
