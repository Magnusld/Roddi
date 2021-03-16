import { createStore } from 'vuex'

export const store =  createStore({
    state: {
        user: {
          username: ''
        },
        isAuthenticated: false,
        token: ''
    },
    mutations: {
        initializeStore(state) {
            if (localStorage.getItem('token')){
                state.token = localStorage.getItem('token') || ('{}')
                state.isAuthenticated = true
            } else {
                state.token = ''
                state.isAuthenticated = false
            }
        },
        setToken(state, token) {
            state.token = token
            state.isAuthenticated = true
        },
        setUsername(state, username) {
            state.user.username = username
        },
        removeUsername(state) {
            state.user.username = ''
        },
        removeToken(state) {
            state.token = ''
            state.isAuthenticated = false
        },
    },
    actions: {
    },
    modules: {
    },
    getters: {
        getUsername: state => state.user.username,
        getLoggedInStatus: state => state.isAuthenticated
    }
})