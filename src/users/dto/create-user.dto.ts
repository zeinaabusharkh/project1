
// fot the data we are reciving from the client
import {IsEmail, IsEnum, IsNotEmpty, IsString} from 'class-validator'
export class CreateUserDto{

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsEnum(["INTERN", "ADMIN", "ENGINEER"], {
        message: 'Valid role Required!'
    })
    role: "INTERN" | "ADMIN" | "ENGINEER";
}