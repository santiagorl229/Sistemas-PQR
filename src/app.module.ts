import { RolService } from '@domain/services/rol.services';
import { SolicitudService } from '@domain/services/solicitud.services';
import { TipoSolicitudService } from '@domain/services/tipo-Solicitud.services';
import { UserService } from '@domain/services/user.services';
import { Module } from '@nestjs/common';
import { getConnectionToken } from '@nestjs/mongoose';
import { RolController } from './aplication/controllers/rol.controller';
import { SolicitudController } from './aplication/controllers/solicitud.controller';
import { TipoSolicitudController } from './aplication/controllers/tipoSolicitud.controller';
import { UserController } from './aplication/controllers/user.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './infraestructure/database/database.module';
import { rolesProviders, solicitudProviders, tiposolicitudProviders, userProviders } from './infraestructure/models';
import { RolRepository } from './infraestructure/repository/rol.repository';
import { SolicitudRepository } from './infraestructure/repository/solicitud.repository';
import { TipoSolicitudRepository } from './infraestructure/repository/tipoSolicitud.repository';
import { UserRepository } from './infraestructure/repository/user.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController,RolController,TipoSolicitudController, UserController,SolicitudController],
  providers: [AppService,
              RolService,
             ...rolesProviders,
             RolRepository,
             TipoSolicitudService,
             TipoSolicitudRepository,
             ...tiposolicitudProviders,
              UserService,
              UserRepository,
              ...userProviders,
              SolicitudService,
              SolicitudRepository,
              ...solicitudProviders,
    {
      provide: getConnectionToken('Database'),
      useValue: {},
    }
  ],
})
export class AppModule {}
