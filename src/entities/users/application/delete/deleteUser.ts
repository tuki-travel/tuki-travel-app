import { User } from "../../domain/UserDomain";
import { UserRepository } from "../../domain/UserRepository";

export function removeUser(userRepository: UserRepository) {
  return async (id: string | number): Promise<User | null> => {
    if (userRepository && id) return await userRepository.remove(id);
    return null;
  };
}
