import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PasswordsService } from './passwords.service';

@Controller('passwords')
export class PasswordsController {
    constructor(private readonly passwordsService: PasswordsService) { }

    @Get()
    findAll() {
        return this.passwordsService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.passwordsService.findOne(+id)
    }

    @Post()
    create(@Body() body: { password: string }) {
        return this.passwordsService.create(body)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body: { password: string }) {
        return this.passwordsService.update(+id, body)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.passwordsService.remove(+id)
    }
}
