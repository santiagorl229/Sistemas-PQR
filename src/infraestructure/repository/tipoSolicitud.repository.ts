import { TIPO_SOLICITUD_MODEL_PROVIDER } from "@constants";
import { TipoSolicitud } from "@domain/entities/tipoSolicitud";
import { Inject, Injectable } from "@nestjs/common";
import { CreateTipoSolicitudDto } from "src/aplication/dto/create-TipoSolicitud-dto";
import { mongooseTipoSolicitudModel, TipoSolicitudModel } from "../models/tipoSolicitud";

@Injectable()
export class TipoSolicitudRepository{
    constructor(@Inject(TIPO_SOLICITUD_MODEL_PROVIDER) private readonly model: TipoSolicitudModel) {}

    async createTipoSolicitud(createTipoSolicitudDto: CreateTipoSolicitudDto): Promise<any>{
        console.log(createTipoSolicitudDto)
        let tiposolicitud = new TipoSolicitudModel(createTipoSolicitudDto);
        
            mongooseTipoSolicitudModel.findOneAndUpdate({'name':tiposolicitud.name}, tiposolicitud, {upsert: true, setDefaultsOnInsert: true}, function(error, result) {
                if (error) console.log(error);
            });
            let sucess_true = {
                "success": true,
                "payload": {
                       "message": "Se guardo el Tipo Solicitud correctamente"
                }   
            }
            return sucess_true; 
    }
    async getTipoSolicitud(): Promise<any>{
        let getAllTipoSolicitud = await mongooseTipoSolicitudModel.find().exec();
        return getAllTipoSolicitud as TipoSolicitud[];
    }
}