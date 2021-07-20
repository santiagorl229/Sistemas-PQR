import { RolService } from '@domain/services/rol.services';
import { Module } from '@nestjs/common';
import { getConnectionToken } from '@nestjs/mongoose';
import { RolController } from './aplication/controllers/rol.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './infraestructure/database/database.module';
import { rolesProviders } from './infraestructure/models';
import { RolRepository } from './infraestructure/repository/rol.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController,RolController],
  providers: [AppService,
              RolService,
             ...rolesProviders,
             RolRepository,
    {
      provide: getConnectionToken('Database'),
      useValue: {},
    }
  ],
})
export class AppModule {}
