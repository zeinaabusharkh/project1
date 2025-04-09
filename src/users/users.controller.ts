import { Controller, Get, Param , Post, Body, Patch, Delete, Query, ParseIntPipe} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ValidationPipe } from '@nestjs/common';

@Controller('users')
export class UsersController {
    /* 
    Get /users
    Get /users/:id
    Post /users
    patch /users/:id
    delete /users/:id
    */
    
    // ORDER MATTERS

    // @Get() // GET /users -> 200 ok
    // findAll(){ return []}    
    constructor(private readonly usersService: UsersService){}

    @Get() // GET /users or users?role=value
    findAll( @Query('role') role?: 'INTERN' | 'ADMIN' | 'ENGINEER'){ 
        return this.usersService.findAll(role)
    }

    @Get(':id') // GET /users/:id -> 200 ok
    findOne(@Param('id', ParseIntPipe) id: number){ 
        return this.usersService.findOne(id)
    }

    @Post() // POST /users -> 201 created 
    create(@Body(ValidationPipe) user: CreateUserDto){
                return this.usersService.create(user)
    }

    @Patch(':id') // PATCH /users/:id -> 200 ok
    update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) userUpdate: UpdateUserDto){
        return this.usersService.update(id, userUpdate)
    }
    
    @Delete(':id') // DELETE /users/:id -> 200 ok
    delete(@Param('id', ParseIntPipe) id: number){ 
        return this.usersService.delete(id)
    }
}

