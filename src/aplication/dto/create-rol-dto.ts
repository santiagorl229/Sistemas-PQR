import { IsArray, IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Roles } from "src/domain/entities/roles";

export class CreateRolDto{
    @IsString()
    @IsNotEmpty()
    name: string;  
}