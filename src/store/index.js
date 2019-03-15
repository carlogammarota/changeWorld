import Vue from 'vue';
import Vuex from "vuex"
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        count: 50,
        users: {
            nombre: "Carlo",
            apellido: "Gammarota",
            años: 23
        },
        alumnos: []
    },
    getters: {
        nombreDevuelve(state) {
            name = state.users.nombre;
            return name;
        },
        alumnosDevuelve(state) {
            //var newValue;
            //newValue = state.alumnos;
            return state.alumnos;
        }

    },
    mutations: {
        agregarAlumno(state, persona){
            console.log("Mutation Vuex", persona);
            state.alumnos.push(persona);
            //state.alumnos.push(persona);
        }
    },
    actions: {
        agregar(state, persona){
            console.log("Actions Vuex", persona);
            state.commit('agregarAlumno', persona);
        }
    }
})