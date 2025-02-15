import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PasswordsModule } from './passwords/passwords.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [PasswordsModule, SharedModule, CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
