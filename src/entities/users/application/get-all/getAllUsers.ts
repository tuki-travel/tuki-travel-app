import { GetAllUsersParams, PaginatedOutputDto, User } from "../../domain/UserDomain";
import { UserRepository } from "../../domain/UserRepository";

export function getAllUsers(
  userRepository: UserRepository,
) {
  return async (params: GetAllUsersParams): Promise<PaginatedOutputDto<User>> => {
    const dbUsers = await userRepository.getAll(params);
    return dbUsers;
  };
}
