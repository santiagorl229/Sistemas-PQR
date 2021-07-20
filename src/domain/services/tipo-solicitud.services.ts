import { Injectable } from "@nestjs/common";
import { CreateTipoSolicitudDto } from "src/aplication/dto/create-TipoSolicitud-dto";
import { TipoSolicitudRepository } from "src/infraestructure/repository/tipoSolicitud.repository";

@Injectable()
export class TipoSolicitudService{
    constructor(private readonly tipoSolicitudRepository: TipoSolicitudRepository){}

    async createTipoSolicitudes(createTipoSolicitudDto: CreateTipoSolicitudDto): Promise<any>{
       return this.tipoSolicitudRepository.createTipoSolicitud(createTipoSolicitudDto)
    }
    async getTipoSolicitud(): Promise<any>{
        return this.tipoSolicitudRepository.getTipoSolicitud()  
    }
}