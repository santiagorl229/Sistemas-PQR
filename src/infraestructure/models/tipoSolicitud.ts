
import * as faker from 'faker';
import { Document,model, Schema } from "mongoose";
import { CreateTipoSolicitudDto } from 'src/aplication/dto/create-TipoSolicitud-dto';

export class TipoSolicitudModel{
    _id?: string;
    name: string;
        
   constructor(tipoSolicitud: CreateTipoSolicitudDto | any){
    this._id = faker.random.uuid();
    this.name = tipoSolicitud.name;
  }
    /* any method would be defined here*/
    save(): TipoSolicitudModel{
        return this;
    } 
}
  var schema = new Schema({
    _id: { required: true, type: String},
    name: { required: true, type: String },
  })
  
  // register each method at schema
  schema.method('foo', TipoSolicitudModel.prototype.save)

  // 2) Document
  export type TipoSolicitudDocument  = TipoSolicitudModel & Document;
  
  // 3) MODEL
  export const mongooseTipoSolicitudModel = model<TipoSolicitudDocument>('TipoSolicitud', schema);

 



