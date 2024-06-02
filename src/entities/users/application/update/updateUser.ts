import { User, UserDataCreate } from "../../domain/UserDomain";
import { UserRepository } from "../../domain/UserRepository";

export function updateUser(userRepository: UserRepository) {
  return async (payload: Partial<UserDataCreate>, userId: number): Promise<User> => {
    return await userRepository.update(payload, userId);
  };
}
