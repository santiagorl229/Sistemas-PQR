import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "src/aplication/dto/create-user.dto";
import { UserRepository } from "src/infraestructure/repository/user.repository";

@Injectable()
export class UserService{
    constructor(private readonly userRepository: UserRepository){}

    async createUser(createUserDto: CreateUserDto): Promise<any>{
       return this.userRepository.createUser(createUserDto)
    }
}