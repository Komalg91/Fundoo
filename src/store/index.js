import { createStore } from 'vuex';
import todos from './modules/todos.js';
import notes from './modules/notes.js';

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    todos,
    notes
  }
})
