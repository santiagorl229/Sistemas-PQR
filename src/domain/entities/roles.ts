import { IsString } from "class-validator";

export class Roles{
    readonly _id?: string;
    
    @IsString()
    name: string;

}