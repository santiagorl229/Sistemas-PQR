import { RolService } from "@domain/services/rol.services";
import { Body, Controller, Post } from "@nestjs/common";
import { CreateRolDto } from "../dto/create-rol-dto";

@Controller('rol')
export class RolController{
    constructor(private readonly rolService: RolService) {}

	@Post('/createRol')
    async createRol(@Body() createRolDto: CreateRolDto): Promise<any>{
		return await this.rolService.createRol(createRolDto);
	}
}