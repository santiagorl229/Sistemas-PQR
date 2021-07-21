import { Injectable } from "@nestjs/common";
import { CreateSolicituDto } from "src/aplication/dto/create-solicitud-dto";
import { SolicitudRepository } from "src/infraestructure/repository/solicitud.repository";

@Injectable()
export class SolicitudService{
    constructor(private readonly solicitudRepository: SolicitudRepository){}

    async createSolicitud(createSolicitudDto: CreateSolicituDto): Promise<any>{
        return this.solicitudRepository.createSolicitud(createSolicitudDto)
    }
    
}