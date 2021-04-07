import axios from "axios";
import {NewUserItemVoteRequest, UserItemPriorityResponse, UserItemVoteResponse} from "@/client/types";


export async function setUserItemVote(userVote: NewUserItemVoteRequest): Promise<void> {
    console.log(userVote)
    await axios.post('api/itemvotes/', {
        user: userVote.userId,
        item: userVote.itemId,
        donate: userVote.donate}).then(response => {
        console.log(response)
    })
}

export async function getLoggedInUserItemVote(itemId: number): Promise<UserItemVoteResponse> {
    const userVote: UserItemVoteResponse = {id: 0, user:0, item: 0, donate: false}
    await axios.get('api/itemvotes/?itemID=' + itemId).then(response => {
        console.log(response)
        if (! (response.data.length == 0)) {
            userVote.id = response.data[0].id;
            userVote.user = response.data[0].user;
            userVote.item = response.data[0].item;
            userVote.donate = response.data[0].donate;
        }
    })
    return userVote
}

export async function removeUserItemVote(id: number): Promise<void> {
    await axios.delete("api/itemvotes/"+id)
        .then(response => {
            console.log(response)
        })
}

export async function getAllItemVote(): Promise<UserItemVoteResponse[]> {
    const UserVotes: UserItemVoteResponse[] = []
    await axios.get('')
    return UserVotes
}