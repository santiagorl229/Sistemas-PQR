import { ROLES_MODEL_PROVIDER } from "@constants";
import { Injectable } from "@nestjs/common";
import { Inject } from "@nestjs/common";
import { CreateRolDto } from "src/aplication/dto/create-rol-dto";
import { mongooseRolModel, RolesModel } from "../models/rol.model";

@Injectable()
export class RolRepository {
    constructor(@Inject(ROLES_MODEL_PROVIDER) private readonly model: RolesModel) {}
    async createRol(createRol: CreateRolDto): Promise<any>{
        let myRol = new RolesModel(createRol);
        //console.log(myRol)
            mongooseRolModel.findOneAndUpdate({'name':myRol.name}, myRol, {upsert: true, setDefaultsOnInsert: true}, function(error, result) {
                if (error) console.log(error);
            });
            let sucess_true = {
                "success": true,
                "payload": {
                       "message": "Se guardo el rol correctamente"
                }   
            }
            return sucess_true;        
    }
}