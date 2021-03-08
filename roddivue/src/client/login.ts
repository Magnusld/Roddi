import axios from "axios";
import {LogInRequest} from "@/client/types";
import {store} from "@/store";
import router from "@/router";

export function login(loginRequest: LogInRequest) {
    if (store.getters.getLoggedInStatus)
        throw { message: "Already logged in" };

    axios.defaults.headers.common["Authorization"] = ""
    localStorage.removeItem("token")
    axios
        .post("/api/token/login/", loginRequest)
        .then(response => {
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
}