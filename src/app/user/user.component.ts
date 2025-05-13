import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';

export interface User 
{
  id:number,
  email:string,
  username:string,
  password:string,
  name:{firstName:string,lastName:string},
  phone:string,
  __v:number
}

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  users:User[]=[];

  constructor(private userService:UserService)
  {
      
  }

  ngOnInit()
  {
   
   this.userService.getUsers()
   .subscribe({
    next:(value)=>{
      this.users=value;
      console.log(this.users)
     }
   })

  

  }

  

}
