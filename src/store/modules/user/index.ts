import { Module } from "vuex";
import { RootState } from "@/store";
import { mutations } from "./mutations";
import { UserState, initialState } from "./state";

export * from "./state";

export const store: Module<UserState, RootState> = {
  state: initialState,
  mutations
};
