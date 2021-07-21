import { IsNotEmpty, IsString } from "class-validator";

export class Solicitud{
    readonly _id?: string;
    
    @IsNotEmpty()
    numeroRadicado: bigint;

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
