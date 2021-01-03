import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

function loadGames() {
  return [
    {
      id: 1,
      name: "DOS2",
      date: "2020-12-21",
      rating: 10,
      abbr: "item1"
    },
    {
      id: 2,
      name: "Fall Guys",
      date: "2020-12-21",
      rating: 9,
      abbr: "item2"
    },
    {
      id: 3,
      name: "Cuphead",
      date: "2020-12-21",
      rating: 7,
      abbr: "item3"
    },
    {
      id: 4,
      name: "Chaosbane",
      date: "2020-12-21",
      rating: 7,
      abbr: "item4"
    },
    {
      name: "Defense Grid",
      date: "2020-12-21",
      rating: 8,
      abbr: "item5"
    }
  ]
}

export default new Vuex.Store({
  state: {
    count: 0,
    form: {},
    username: "",
    games: loadGames(),
    tattoos: null
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,    
    setTattoos(state, tattoos) {
      state.tattoos = tattoos
    },
    saveUsername(state, value) {
      state.username = value;
    },
  },
  getters: {
    getNote(state) {
      return state.form.note;
    },
    getForm(state) {
      return state.form;
    },
    getUsername(state) {
      return state.username;
    },
    getGames(state) {
      return state.games
    },
    getTattoos(state) {
      return state.tattoos
    }
  },

  actions: {

    getTattoos({ commit }) {
      axios.get('http://localhost:3000/tattoos')
        .then(response => {
          commit('setTattoos', response.data)
        })
    }

  }
})
