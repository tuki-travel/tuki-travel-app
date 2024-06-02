import { UserRepository } from "../entities/users/domain/UserRepository";
import { apiUserRepository } from "../entities/users/infra/api/UserRepository";
import { Container } from "./IOC";

export const initContainer = () => {
  const container = Container;
  container.register<UserRepository>("apiUserRepository", apiUserRepository());
 
};
