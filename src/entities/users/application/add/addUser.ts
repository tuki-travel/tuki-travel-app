import { User, UserDataCreate } from "../../domain/UserDomain";
import { UserRepository } from "../../domain/UserRepository";

export function addUser(userRepository: UserRepository) {
  return async (payload: UserDataCreate): Promise<User | null> => {
    if (payload) return await userRepository.create(payload);
    return null;
  };
}
