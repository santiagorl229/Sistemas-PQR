import { RolService } from '@domain/services/rol.services';
import { TipoSolicitudService } from '@domain/services/tipo-Solicitud.services';
import { Module } from '@nestjs/common';
import { getConnectionToken } from '@nestjs/mongoose';
import { RolController } from './aplication/controllers/rol.controller';
import { TipoSolicitudController } from './aplication/controllers/tipoSolicitud.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './infraestructure/database/database.module';
import { rolesProviders, tiposolicitudProviders } from './infraestructure/models';
import { RolRepository } from './infraestructure/repository/rol.repository';
import { TipoSolicitudRepository } from './infraestructure/repository/tipoSolicitud.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController,RolController,TipoSolicitudController],
  providers: [AppService,
              RolService,
             ...rolesProviders,
             RolRepository,
             TipoSolicitudService,
             TipoSolicitudRepository,
             ...tiposolicitudProviders,

    {
      provide: getConnectionToken('Database'),
      useValue: {},
    }
  ],
})
export class AppModule {}
