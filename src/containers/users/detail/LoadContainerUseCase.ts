import BaseUseCase from "@/usecases/BaseUseCase";
import ErrorService from "@/services/ErrorService";
import UserRepository from "@/repositories/UserRepository";

export interface ILoadContainerUseCase {
  userRepository: UserRepository;
  id: number;
  errorService: ErrorService;
}

export default class LoadContainerUseCase implements BaseUseCase {
  userRepository: UserRepository;
  id: number;
  errorService: ErrorService;

  constructor({ userRepository, id, errorService }: ILoadContainerUseCase) {
    this.userRepository = userRepository;
    this.id = id;
    this.errorService = errorService;
  }

  async execute() {
    try {
      const data = await this.userRepository.fetchUser(this.id);
      this.userRepository.saveUser(data);
    } catch (e) {
      await this.errorService.handle(e);
    }
    return;
  }
}
