import { SOLICITUD_MODEL_PROVIDER } from "@constants";
import { Inject, Injectable } from "@nestjs/common";
import { CreateSolicituDto } from "src/aplication/dto/create-solicitud-dto";
import { solicitudModel } from "../models/solicitud";

@Injectable()
export class SolicitudRepository{
    constructor(@Inject(SOLICITUD_MODEL_PROVIDER) private readonly model: solicitudModel) {}
    async createSolicitud(createSolicitudDto: CreateSolicituDto): Promise<any>{
        let solicitud = new solicitudModel(createSolicitudDto);
    }
    

}