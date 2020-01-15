import { IUser } from "@/entities/User";

export interface UserState {
  page: number;
  size: number;
  user: IUser;
}

export const initialState = (): UserState => {
  return {
    page: 1,
    size: 20,
    user: {
      firstName: "",
      familyName: "",
      gender: ""
    }
  };
};
