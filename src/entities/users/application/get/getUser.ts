import { User } from "../../domain/UserDomain";
import { UserRepository } from "../../domain/UserRepository";

export function getUser(userRepository: UserRepository) {
  return async (email: string): Promise<User | null> => {
    if (userRepository && email) return await userRepository.get(email);
    return null;
  };
}
