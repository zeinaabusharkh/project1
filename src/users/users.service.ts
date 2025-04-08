import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {id: 1, name: 'John', email: 'john@gmail.com', role: 'ADMIN'},
        {id: 2, name: 'Jane', email: 'jane@gmail.com', role: 'ENGINEER'},
        {id: 3, name: 'Jim', email: 'jim@gmail.com', role: 'INTERN'},
        {id: 4, name: 'Jill', email: 'jill@gmail.com', role: 'INTERN'},

    ]

    findAll(role? : 'INTERN' | 'ADMIN' | 'ENGINEER'){
        if (role){
            return this.users.filter(user =>user.role === role)
        }
        return this.users
    }

    findOne(id: number){
        return this.users.find(user => user.id === id)
    }
    //create a user id 
    create(user: {name:string, email:string, role: 'INTERN' | 'ADMIN' | 'ENGINEER'}){
        const userByHighestId = [...this.users].sort((a,b) =>b.id - a.id)
        const newUser = {id: userByHighestId[0].id + 1, ...user}
        this.users.push(newUser)
        return newUser
    }

    update(id: number, updatedUser: {name?:string, email?:string, role?: 'INTERN' | 'ADMIN' | 'ENGINEER'}){
      this.users = this.users.map(user => {
        if(user.id === id){
            return {...user, ...updatedUser}
        }
        return user
      })
      return this.findOne(id)
    }


    delete(id: number){
        
        this.users = this.users.filter(user => user.id !== id)
        return this.findOne(id)
    }
    
    
    
    
}
