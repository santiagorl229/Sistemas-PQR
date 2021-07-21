import { IsNotEmpty, IsString } from "class-validator";

export class CreateSolicituDto{

    @IsNotEmpty()
    numeroRadicado: string;

    @IsNotEmpty()
    fechaCreacion: Date;

    @IsString()
    @IsNotEmpty()
    userIdCreated: string;

    @IsString()
    @IsNotEmpty()
    userIdAttend: string;

    @IsString()
    @IsNotEmpty()
    tipoSolicitudActual: string;

    @IsString()
    @IsNotEmpty()
    tipoSolicitudRespuesta: string;
    
    @IsString()
    @IsNotEmpty()
    comentarios: string;

}