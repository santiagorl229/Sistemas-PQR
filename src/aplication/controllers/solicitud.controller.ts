import { SolicitudService } from "@domain/services/solicitud.services";
import { Body, Controller, Post } from "@nestjs/common";
import { CreateSolicituDto } from "../dto/create-solicitud-dto";

@Controller('solicitud')
export class SolicitudController{
    constructor(private readonly solicitudService: SolicitudService) {}
    
    @Post('/createSolicitud')
    async createSolicitud(@Body() createSolicitudDto: CreateSolicituDto): Promise<any>{
         return this.solicitudService.createSolicitud(createSolicitudDto);
    }
}