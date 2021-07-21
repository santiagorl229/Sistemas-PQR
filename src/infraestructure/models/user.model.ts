
import * as faker from 'faker';
import { Document,model, Schema } from "mongoose";
import { CreateUserDto } from 'src/aplication/dto/create-user.dto';
import { Roles } from "src/domain/entities/roles";

export class UserModel{
    _id?: string;
    name: string;
    password: string;
    rol: string;
        
   constructor(user: CreateUserDto | any){
    this._id = faker.random.uuid();
    this.name = user.name;
    this.password = user.password;
    this.rol = user.roles;
  }
    /* any method would be defined here*/
    save(): UserModel{
        return this;
    } 
}
  var schema = new Schema({
    _id: { required: true, type: String},
    name: { required: true, type: String },
    password: { required: true, unique : true, dropDups: true,  type: String },
    rol : {required: true, type: String },
  })
  
  // register each method at schema
  schema.method('foo', UserModel.prototype.save)

  // 2) Document
  export type UserDocument  = UserModel & Document;
  
  // 3) MODEL
  export const mongooseUsersModel = model<UserDocument>('User', schema);







