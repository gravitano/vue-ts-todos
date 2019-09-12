import Vue from 'vue';
import Vuex from 'vuex';
import todos from '@/store/modules/todos';

Vue.use(Vuex);

export interface RootState {}

export default new Vuex.Store({
  modules: {
    todos,
  },
});
