import { LoginTicket } from "google-auth-library/build/src/auth/loginticket";


const initialState = {
    isLogged: false,
};

const getters = {};

const actions = {
    async login({ commit }, password) {
        if (password === '1234') {
            commit('login')
            return true;
        } else {
            return false;
        }
    },
    logout({ commit }) {
        commit('logout')
    }
};

const mutations = {
    login(state) {
        state.isLogged = true;
    },
    logout(state) {
        state.isLogged = false;
    }

};

export default {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations,
};
