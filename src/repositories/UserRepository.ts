import BaseRepository from "@/repositories/BaseRepository";
import store from "@/store";
import { APIClient } from "@/network/APIClient";
import { UserAPI } from "@/network/api/User";
import { StoreUser, ClearUser } from "@/store/modules/user/types";
import { IUser } from "@/entities/User";

export default class UserRepository implements BaseRepository {
  constructor() {}

  async fetchUser(id: number): Promise<IUser> {
    return await APIClient.shared.request(new UserAPI.GetUser(id));
  }

  saveUser(user: IUser) {
    store.commit(new StoreUser(user));
  }

  clearUser() {
    store.commit(new ClearUser());
  }

  getUser(): IUser {
    return store.state.user.user;
  }
}
