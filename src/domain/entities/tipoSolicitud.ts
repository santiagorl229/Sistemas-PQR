import { IsString } from "class-validator";

export class TipoSolicitud{
    readonly _id?: string;
    
    @IsString()
    name: string;

}