import { IUser } from "@/entities/User";

export enum Types {
  STORE_USER = "user/store_user",
  CLEAR_USER = "user/clear_user"
}

export class StoreUser implements FluxStandardAction {
  type = Types.STORE_USER;
  constructor(public payload: IUser) {}
}

export class ClearItem implements FluxStandardAction {
  type = Types.CLEAR_USER;
}
