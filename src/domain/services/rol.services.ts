import { Injectable } from "@nestjs/common";
import { CreateRolDto } from "src/aplication/dto/create-rol-dto";
import { RolRepository } from "src/infraestructure/repository/rol.repository";

@Injectable()
export class RolService{
    constructor(private readonly rolRepository: RolRepository){}
    async createRol(createRolDto: CreateRolDto): Promise<any>{
        return this.rolRepository.createRol(createRolDto);
    }
}