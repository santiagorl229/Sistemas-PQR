import { CreateSolicituDto } from "src/aplication/dto/create-solicitud-dto";

import * as faker from 'faker';
import { Document,model, Schema } from "mongoose";

export class solicitudModel{
    _id?: string;
    numeroRadicado: bigint;
    fechaCreacion: Date;
    userIdCreated: string;
    userIdAttend: string;
    tipoSolicitudActual: string;    
    tipoSolicitudRespuesta: string;
    comentarios: string;

   constructor(solicitud: CreateSolicituDto | any){
    this._id = faker.random.uuid();
    this.numeroRadicado = solicitud.numeroRadicado;
    this.fechaCreacion = solicitud.fechaCreacion;
    this.userIdCreated = solicitud.userIdCreated;
    this.userIdAttend = solicitud.userIdAttend;
    this.tipoSolicitudActual = solicitud.tipoSolicitudActual;
    this.tipoSolicitudRespuesta = solicitud.tipoSolicitudRespuesta;
    this.comentarios = solicitud.comentarios;
  }
    /* any method would be defined here*/
    save(): solicitudModel{
        return this;
    } 
}
  var schema = new Schema({
    _id: { required: true, type: String},
    numeroRadicado: { required: true, type: BigInt },
    fechaCreacion: {type: Date, default: Date.now},
    userIdCreated : {required: true, type: String },
    userIdAttend : {required: true, type: String },
    tipoSolicitudActual : {required: true, type: String },
    tipoSolicitudRespuesta : {required: true, type: String },
    comentarios : {required: true, type: String }
  })
  
  // register each method at schema
  schema.method('foo', solicitudModel.prototype.save)

  // 2) Document
  export type solicitudDocument  = solicitudModel & Document;
  
  // 3) MODEL
  export const mongooseSolicitudModel = model<solicitudDocument>('solicitud', schema);