import { IsNotEmpty, IsString } from "class-validator";

export class CreateTipoSolicitudDto{
    @IsString()
    @IsNotEmpty()
    name: string;  
}