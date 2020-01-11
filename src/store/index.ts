import Vue from "vue";
import Vuex from "vuex";

// modules
import * as user from "@/store/modules/user";

Vue.use(Vuex);

export interface RootState {
  user: user.UserState;
}

export default new Vuex.Store<RootState>({
  modules: {
    user: user.store
  }
});
