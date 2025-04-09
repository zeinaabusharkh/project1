import { CreateUserDto } from "./create-user.dto";
import { PartialType } from "@nestjs/mapped-types";
// when we extend the create user dto, we get all the properties of the create user dto
export class UpdateUserDto extends PartialType(CreateUserDto){}

