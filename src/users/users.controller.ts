import { Controller, Get, Param , Post, Body, Patch, Delete, Query} from '@nestjs/common';

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


    @Get() // GET /users or users?role=value
    findAll( @Query('role') role?: 'INTERN' | 'ADMIN' | 'ENGINEER'){ 
        return []
    }

    @Get(':id') // GET /users/:id -> 200 ok
    findOne(@Param('id') id: string){ 
        return {id}
    }

    @Post() // POST /users -> 201 created 
    create(@Body() user: {}){
                return user
    }

    @Patch(':id') // PATCH /users/:id -> 200 ok
    update(@Param('id') id: string, @Body() userUpdate:{}){ 
        return {id, ...userUpdate}
    }
    
    @Delete(':id') // DELETE /users/:id -> 200 ok
    delete(@Param('id') id: string){ 
        return {id}
    }
}

