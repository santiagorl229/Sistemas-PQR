import { SOLICITUD_MODEL_PROVIDER } from "@constants";
import { Inject, Injectable } from "@nestjs/common";
import { CreateSolicituDto } from "src/aplication/dto/create-solicitud-dto";
import { mongooseSolicitudModel, solicitudModel } from "../models/solicitud";
import { mongooseTipoSolicitudModel } from "../models/tipoSolicitud";
import { mongooseUsersModel } from "../models/user.model";

@Injectable()
export class SolicitudRepository{
    constructor(@Inject(SOLICITUD_MODEL_PROVIDER) private readonly model: solicitudModel) {}
    async createSolicitud(createSolicitudDto: CreateSolicituDto): Promise<any>{
        let solicitud = new solicitudModel(createSolicitudDto);
        let userFind = await mongooseUsersModel.findOne({'_id':solicitud.userIdCreated }).exec();
        let tipoSolicitud = await mongooseTipoSolicitudModel.findOne({'_id':solicitud.tipoSolicitudActual }).exec();
        let radicado = Math.random();
        solicitud.numeroRadicado = radicado.toString();

        if(userFind && tipoSolicitud){
            mongooseSolicitudModel.findOneAndUpdate({'numeroRadicado':solicitud.numeroRadicado}, solicitud, {upsert: true, setDefaultsOnInsert: true}, function(error, result) {
                if (error) console.log(error);
            });
            let sucess_true = {
                "success": true,
                "payload": {
                    "message": "Se guardo el Usuario correctamente"
                }   
            }
            return sucess_true; 
        }
    }
    
}