import { UserRepository } from "../../domain/UserRepository";
import {
  GetAllUsersParams,
  PaginatedOutputDto,
  User,
  UserDataCreate,
} from "../../domain/UserDomain";
import config from "../../../../config";
import axios from "axios";


const apiUrl = config.API_SERVER_URL;

export function apiUserRepository(): UserRepository {
  async function get(email: string): Promise<User | null> {
    if (email) {
      const user: User | null = await axios.get(`${apiUrl}/users/${email}`);
      return user;
    }
    return null;
  }

  async function remove(id: string | number): Promise<User | null> {
    if (id) {
      const user: User | null = await axios.delete(`${apiUrl}/users/${id}`);
      return user;
    }
    return null;
  }

  async function getAll({
    search,
    page,
    take,
  }: GetAllUsersParams): Promise<PaginatedOutputDto<User>> {
    return await axios.get(
      `${apiUrl}/users?search=${search}&page=${page}&take=${take}`
    );
  }

  async function create(payload: UserDataCreate | null): Promise<User> {
    const newUser: User = await axios.post(`${apiUrl}/users`, payload);
    return newUser;
  }

  async function update(
    payload: Partial<UserDataCreate>,
    userId: number
  ): Promise<User> {
    const newUser: User = await axios.patch(`${apiUrl}/users/${userId}`, payload);
    return newUser;
  }

  return {
    get,
    getAll,
    create,
    remove,
    update,
  };
}
