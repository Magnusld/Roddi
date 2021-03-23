import axios from "axios";
import {NewUserItemVoteRequest, UserItemVoteResponse} from "@/client/types";


export async function setUserItemVote(userVote: NewUserItemVoteRequest): Promise<void> {
    console.log(userVote)
    await axios.post('api/itemvotes', {
        user: userVote.userId,
        item: userVote.itemId,
        donate: userVote.donate}).then(response => {
        console.log(response)
    })
}

export async function getLoggedInUserItemVote(itemId: number): Promise<UserItemVoteResponse> {
    let userVote: UserItemVoteResponse
    await axios.get('api/itemvotes/?itemID=' + itemId).then(response => {
        console.log(response)
        if (!response.data.isEmpty()) {
            userVote.id = response.data[0].id;
            userVote.user = response.data[0].user;
            userVote.item = response.data[0].item;
            userVote.donate = response.data[0].donate;
        }
    })
    return userVote!
}