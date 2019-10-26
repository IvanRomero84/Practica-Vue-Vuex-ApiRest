import axios from 'axios'


const initialState = {
    loading: false,
    equipo: [],
};
// 64f6820032f19fc3d048e05972ea9e4392adf334a7ea0cda4d4db094dbba2b8a
const actions = {
    traerEquipos({ commit }) {
        commit('startLoad');
        axios.get('https://apiv2.apifootball.com/?action=get_teams&league_id=468&APIkey=64f6820032f19fc3d048e05972ea9e4392adf334a7ea0cda4d4db094dbba2b8a')
            .then(request => {
                console.log(request)
                console.log(request.data)
                commit('guardarEquipos', request.data)
            })
            .catch(() => {
                console.log('Ha fallado la carga')
            })
            .finally(() => {
                commit('endLoad');
            })
    },
    traerClub({ commit }, team_name) {
        commit('startLoad');
        return axios.get('https://apiv2.apifootball.com/?action=get_teams&league_id=468&APIkey=64f6820032f19fc3d048e05972ea9e4392adf334a7ea0cda4d4db094dbba2b8a/' + team_name)
            .then((response) => {
                commit('guardarClubInfo', response.data)
                return response.data
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
    guardarEquipos(state, lista) {
        state.lista = lista
    },
    guardarClubInfo(state, datos) {
        console.log(datos)
        for (let i = 0; i < state.lista.length; i += 1) {
            if (state.lista[i].team_name == datos.team_name) {
                state.lista[i].players = datos;
                break;
            }
        }
    }
};

const getters = {
    getClubByName(state) {
        console.log(state)
        //return 'Hola mundo' + state.loading
        return (nombre) => {
            // return 'Hola ' + nombre + ' - ' + state.loading
            return state.lista.filter(item => {
                return item.team_name == nombre
            })
        }
    }

};


export default {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations,
};