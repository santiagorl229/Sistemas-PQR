import { UserService } from "@domain/services/user.services";
import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDto } from "../dto/create-user.dto";

@Controller('user')
export class UserController{
    constructor(private readonly userService: UserService) {}
    
    @Post('/createUser')
    async createUser(@Body() createUserDto: CreateUserDto): Promise<any>{
         return this.userService.createUser(createUserDto);
    }
}