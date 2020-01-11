import { IUser } from "@/entities/User";

export interface UserState {
  page: number;
  size: number;
  user: IUser | null;
  // users: IUsers[];
}

export const initialState = (): UserState => {
  return {
    page: 1,
    size: 20,
    user: null
    // users: []
  };
};
