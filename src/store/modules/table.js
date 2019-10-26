import axios from 'axios'


const initialState = {
    loading: false,
    tabla: [],
};

const getters = {};

const actions = {
    traerTabla({ commit }) {
        commit('startLoad');
        axios.get('https://apiv2.apifootball.com/?action=get_standings&league_id=468&APIkey=64f6820032f19fc3d048e05972ea9e4392adf334a7ea0cda4d4db094dbba2b8a')
            .then(request => {
                console.log(request)
                console.log(request.data)
                commit('guardarTabla', request.data)
            })
            .catch(() => {
                console.log('Ha fallado la carga')
            })
            .finally(() => {
                commit('endLoad');
            })
    },
};

const mutations = {
    startLoad(state) {
        state.loading = true
    },
    endLoad(state) {
        state.loading = false
    },
    guardarTabla(state, lista) {
        state.lista = lista
    },
};

export default {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations,
};