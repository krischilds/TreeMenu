import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    form: {},
    username: ""
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    saveForm: (state, form) => (state.form = form),
    saveNote: (state, note) => (state.form.note = note),
    saveUsername: (state, username) => (state.username = username)
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
    }
  },
  actions: {}
});
