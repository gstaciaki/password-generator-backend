import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { PasswordsService } from './passwords.service';
import * as dtos from './dto/password.dto';

@Controller('passwords')
export class PasswordsController {
  constructor(private readonly passwordsService: PasswordsService) {}

  @Get()
  findAll() {
    return this.passwordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.passwordsService.findOne(id);
  }

  @Post()
  create(@Body() body: dtos.CreatePasswordDtoInput) {
    return this.passwordsService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: dtos.UpdatePasswordDtoInput) {
    return this.passwordsService.update(id, body);
  }

  @Patch(':id/regenerate')
  genNewPassword(@Param('id') id: string) {
    return this.passwordsService.genNewPassword(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.passwordsService.remove(id);
  }
}
