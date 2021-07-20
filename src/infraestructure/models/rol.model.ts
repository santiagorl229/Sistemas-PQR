
import * as faker from 'faker';
import { Document,model, Schema } from "mongoose";
import { CreateRolDto } from 'src/aplication/dto/create-rol-dto';
import { CreateUserDto } from 'src/aplication/dto/create-user.dto';
import { Roles } from "src/domain/entities/roles";

export class RolesModel{
    _id?: string;
    name: string;
        
   constructor(rol: CreateRolDto | any){
    this._id = faker.random.uuid();
    this.name = rol.name;
  }
    /* any method would be defined here*/
    save(): RolesModel{
        return this;
    } 
}
  var schema = new Schema({
    _id: { required: true, type: String},
    name: { required: true, type: String },
  })
  
  // register each method at schema
  schema.method('foo', RolesModel.prototype.save)

  // 2) Document
  export type RolDocument  = RolesModel & Document;
  
  // 3) MODEL
  export const mongooseRolModel = model<RolDocument>('Rol', schema);

 



