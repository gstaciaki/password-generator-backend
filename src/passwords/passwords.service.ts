import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as dtos from './dto/password.dto';
import { randomBytes } from 'crypto';

@Injectable()
export class PasswordsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const passwords = await this.prisma.password.findMany();

    return passwords.map((p) => {
      return {
        id: p.id,
        alias: p.alias,
        accountEmail: p.accountEmail,
      };
    });
  }

  async findOne(id: string) {
    const password = await this.prisma.password.findUnique({ where: { id } });

    if (!password) {
      throw new NotFoundException('Recurso nao encontrado');
    }

    return password;
  }

  async create(
    password: dtos.CreatePasswordDtoInput,
  ): Promise<dtos.CreatePasswordDtoOutput> {
    const newPassword = await this.generatePassword();

    return this.prisma.password.create({
      data: {
        value: newPassword,
        accountEmail: password.accountEmail,
        alias: password.passwordAlias,
        description: password.description,
      },
    });
  }

  async update(
    id: string,
    passwordUpdates: dtos.UpdatePasswordDtoInput,
  ): Promise<dtos.UpdatePasswordDtoOutput> {
    const password = await this.findOne(id);
    if (!password) {
      throw new NotFoundException('Recurso nao encontrado');
    }

    return this.prisma.password.update({
      where: { id },
      data: passwordUpdates,
    });
  }

  async remove(id: string) {
    const password = await this.findOne(id);
    if (!password) {
      throw new NotFoundException('Recurso nao encontrado');
    }

    return this.prisma.password.delete({ where: { id } });
  }

  async genNewPassword(id: string) {
    const password = await this.findOne(id);
    if (!password) {
      throw new NotFoundException('Recurso nao encontrado');
    }

    return this.prisma.password.update({
      where: { id },
      data: {
        value: await this.generatePassword(),
      },
    });
  }

  private async generatePassword(length = 20): Promise<string> {
    return randomBytes(length).toString('base64').slice(0, length);
  }
}
