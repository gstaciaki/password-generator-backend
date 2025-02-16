import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as dtos from './dto/password.dto';
import { randomBytes } from 'crypto';

@Injectable()
export class PasswordsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.password.findMany();
  }

  findOne(id: string) {
    return this.prisma.password.findUnique({ where: { id } });
  }

  create(password: dtos.CreatePasswordDto) {
    const newPassword = this.generatePassword();

    return this.prisma.password.create({
      data: {
        value: newPassword,
        accountEmail: password.accountEmail,
        alias: password.passwordAlias,
        description: password.description,
      },
    });
  }

  update(id: string, passwordUpdates: dtos.UpdatePasswordDto) {
    return this.prisma.password.update({
      where: { id },
      data: passwordUpdates,
    });
  }

  remove(id: string) {
    return this.prisma.password.delete({ where: { id } });
  }

  private generatePassword(length = 20): string {
    return randomBytes(length).toString('base64').slice(0, length);
  }
}
