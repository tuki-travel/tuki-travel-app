import { GetAllUsersParams, PaginatedOutputDto, User, UserDataCreate } from "./UserDomain";
export interface UserRepository {
  get: (email: string) => Promise<User | null>;
  getAll: (params: GetAllUsersParams) => Promise<PaginatedOutputDto<User>>;
  create: (user: UserDataCreate) => Promise<User>;
  update: (user: Partial<UserDataCreate>, userId: number) => Promise<User>;
  remove: (id: string | number) => Promise<User | null>;
}


