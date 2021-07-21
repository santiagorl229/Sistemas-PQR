import { IsNotEmpty } from "class-validator";

export class CreateSolicituDto{

    @IsNotEmpty()
    numeroRadicado: bigint;
}