import { IsNotEmpty, IsString } from "class-validator";
import { Roles } from "./roles";

export class User{
    readonly _id?: string;
    
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsString()
    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    rol: Roles["_id"];
}