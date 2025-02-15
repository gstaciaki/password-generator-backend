import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [];

  create(user) {
    user.id = this.users.length + 1;
    this.users.push(user);
    return user;
  }

  findAll(filter?: string, page?: number) {
    let results = this.users;

    if (filter) {
      results = results.filter((user) =>
        user.name.toLowerCase().includes(filter.toLowerCase()),
      );
    }

    const pageSize = 5;
    const start = ((page || 1) - 1) * pageSize;

    return results.slice(start, start + pageSize);
  }

  findOne(id: number) {
    const user = this.users.find((u) => u.id === id);
    if (!user) throw new NotFoundException('Usuário não encontrado.');
    return user;
  }
}