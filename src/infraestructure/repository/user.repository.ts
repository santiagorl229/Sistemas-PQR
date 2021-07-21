import { USER_MODEL_PROVIDER } from "@constants";
import { Inject, Injectable } from "@nestjs/common";
import { CreateUserDto } from "src/aplication/dto/create-user.dto";
import { mongooseRolModel } from "../models/rol.model";
import { mongooseUsersModel, UserModel } from "../models/user.model";
import * as bcrypt from 'bcryptjs';
@Injectable()
export class UserRepository{
    
    constructor(@Inject(USER_MODEL_PROVIDER) private readonly model: UserModel) {}
    async createUser(createUser: CreateUserDto): Promise<any>{
        try {
            let myUser = new UserModel(createUser);
            let userFind = await mongooseUsersModel.findOne({'_id':myUser._id }).exec();
            let findRol = await mongooseRolModel.findOne({'_id':myUser.rol}).exec();

            if(!findRol){
                return false;
            }
                    //Se hastea la contraseña
            let genPassword = await bcrypt.genSaltSync(10);      
            let password = await this.hashPassword(myUser.password, genPassword);
            myUser.password =password;

            let UserFinal = (userFind)? userFind: myUser;
            if(userFind){
                UserFinal.name = myUser.name;
                UserFinal.password = myUser.password;
                UserFinal.rol = myUser.rol;
            }
                mongooseUsersModel.findOneAndUpdate({'name':myUser.name}, myUser, {upsert: true, setDefaultsOnInsert: true}, function(error, result) {
                    if (error) console.log(error);
                });
                let sucess_true = {
                    "success": true,
                    "payload": {
                        "message": "Se guardo el Usuario correctamente"
                    }   
                }
                return sucess_true;                   
        }catch (error) {
            
        }                
    }
        private async hashPassword(password: string, salt: string): Promise<string>{
        return bcrypt.hash(password, salt);
    }

}