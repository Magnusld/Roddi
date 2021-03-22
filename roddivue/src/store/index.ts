import { createStore } from 'vuex'

export const store =  createStore({
    state: {
        user: {
          username: '',
            userID: ''
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
        setUserID(state, userID) {
            state.user.userID = userID
        },
        removeUserID(state) {
            state.user.userID = ''
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
        getUserID: state => state.user.userID,
        getUsername: state => state.user.username,
        getLoggedInStatus: state => state.isAuthenticated
    }
})