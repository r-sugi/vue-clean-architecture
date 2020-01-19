import BaseUseCase from "@/usecases/BaseUseCase";
import UserRepository from "@/repositories/UserRepository";

export interface IDestroyContainerUseCase {
  userRepository: UserRepository;
}

export default class DestroyContainerUseCase implements BaseUseCase {
  userRepository: UserRepository;

  constructor({ userRepository }: IDestroyContainerUseCase) {
    this.userRepository = userRepository;
  }

  async execute() {
    return this.userRepository.clearUser();
  }
}
