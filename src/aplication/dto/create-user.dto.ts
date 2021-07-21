import { IsArray, IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Roles } from "src/domain/entities/roles";

export class CreateUserDto{

    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsString()
    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    roles: Roles["_id"];
    
}
