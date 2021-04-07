import axios from "axios";
import {NewUserItemVoteRequest, UserItemPriorityResponse, UserItemVoteResponse, UserVote} from "@/client/types";
import {getUserById} from "@/client/user";
import {getAllItemPriority} from "@/client/priorities";


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

export async function getAllItemVote(id: number): Promise<UserVote[]> {
    const UserVotes: UserVote[] = []
    await getAllItemPriority(id).then(response => {
        response.forEach(i => UserVotes.push(i))
    })
    await axios.get('/api/allvotes/?itemID=' + id).then(response => {
        for (let i = 0; i < response.data.length; i++) {
            const vote: UserVote = {
                userId: response.data[i].user,
                itemId: response.data[i].item,
                vote: "",
                userName: ""
            }
            if (response.data[i].donate){
                vote.vote = "Doneres"
            } else {
                vote.vote = "Kastes"
            }
            UserVotes.push(vote)
        }
    })
    for (let i = 0; i < UserVotes.length; i++) {
        await getUserById(UserVotes[i].userId).then(response => {
            UserVotes[i].userName = response.username
        })
    }
    return UserVotes
}