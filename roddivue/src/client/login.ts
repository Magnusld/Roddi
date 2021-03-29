import axios from "axios";
import {LogInRequest, SignUpRequest} from "@/client/types";
import {store} from "@/store";
import router from "@/router";
import {getCurrentUserId} from "@/client/user";

export async function login(loginRequest: LogInRequest): Promise<void> {
    if (store.getters.getLoggedInStatus)
        throw { message: "Already logged in" };

    axios.defaults.headers.common["Authorization"] = ""
    localStorage.removeItem("token")
    await axios.post("/api/token/login/", loginRequest).then(response => {
            console.log(response)
            const token = response.data.auth_token
            store.commit('setToken', token)
            store.commit('setUsername', loginRequest.username)
            axios.defaults.headers.common["Authorization"] = "Token " + token
            console.log(token)
            localStorage.setItem("token", token)
            router.push('/')
        })
        .catch(error => {
            if (error.response) {
                for (const property in error.response.data) {
                    //this.errors.push(`${property}: ${error.response.data[property]}`)
                }
                console.log(JSON.stringify(error.response.data))
            } else if (error.message) {
                console.log(JSON.stringify(error.message))
            } else {
                console.log(JSON.stringify(error))
            }
        })
    await getCurrentUserId().then(response => {
        console.log(response)
        store.commit('setUserID', response)
    })
}

export async function signup(signupRequest: SignUpRequest): Promise<void> {
    console.log(signupRequest);
    axios
        .post("api/users/", signupRequest)
        .then(response => {
            console.log(response)
            router.push('/login')
        })
}

export async function logout(): Promise<void> {
    axios.post("/api/token/logout/").then(response => {
            axios.defaults.headers.common["Authorization"] = ""
            localStorage.removeItem("token")
            store.commit('removeToken')
            store.commit('removeUsername')
            store.commit('removeUserID')
            router.push('/login')
        })
        .catch(error => {
            if (error.response) {
                console.log(JSON.stringify(error.response.data))
            } else if (error.message) {
                console.log(JSON.stringify(error.message))
            } else {
                console.log(JSON.stringify(error))
            }
        })
}
