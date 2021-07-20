import { TipoSolicitud } from "@domain/entities/tipoSolicitud";
import { TipoSolicitudService } from "@domain/services/tipo-Solicitud.services";
import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateTipoSolicitudDto } from "../dto/create-TipoSolicitud-dto";

@Controller('tipoSolicitud')
export class TipoSolicitudController{
    constructor(private readonly tipoSolicitudService: TipoSolicitudService) {}
    
    @Post('/createTipoSolicitud')
    async createTipoSolicitud(@Body() createTipoSolicitudDto: CreateTipoSolicitudDto): Promise<any>{
         return this.tipoSolicitudService.createTipoSolicitudes(createTipoSolicitudDto);
    }

    @Get('/getAllTipoSolicitud')
    async getAllTipoSolicitud(): Promise<TipoSolicitud[]>{
      return await this.tipoSolicitudService.getTipoSolicitud();
    }
}