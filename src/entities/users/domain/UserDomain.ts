export type User = {
  name: string;
  lastname: string;
  email: string;
  id: string;
  role: string;
  phone: string;
  headlineId?: number 
};

export type UserDataCreate = Omit<User, "id">;
export type GetAllUsersParams = {
  search: string;
  page: number;
  take: number;
};

export type PaginatedOutputDto<T> = {
  count: number;
  exceedCount: boolean;
  exceedTotalPages: boolean;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  page: number;
  result: T[];
  totalPages: number;
};
