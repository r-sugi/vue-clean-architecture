import { MutationTree } from "vuex";
import { initialState, UserState } from "./state";
import { Types, StoreUser } from "./types";

export const mutations: MutationTree<UserState> = {
  [Types.STORE_USER]: (state, action: StoreUser) => {
    const user = action.payload;
    state.user = user;
  },
  [Types.CLEAR_USER]: state => {
    const initial = initialState();
    state.user = initial.user;
  }
};
