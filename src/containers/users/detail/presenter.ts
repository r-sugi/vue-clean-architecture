import { IUser } from "@/entities/User";
import UserRepository from "@/repositories/UserRepository";

export interface IPresenter {
  userRepository: UserRepository;
}

export interface IPresenterState {
  user: IUser;
}

export default ({ userRepository }: IPresenter): IPresenterState => {
  return {
    user: userRepository.getUser()
  };
};
