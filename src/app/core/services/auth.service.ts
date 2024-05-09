import { Injectable } from '@angular/core';
import { IUser } from '../../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated : boolean = false ;

  constructor() { }


  Signup(user : IUser){
    let users: IUser[] = [];

    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      users = JSON.parse(storedUsers);
    }
    const id = this.generateUserId(users);

    // Assign the generated ID to the user
    user.id = id;

    // Add the new user to the array
    users.push(user);

    // Store the updated users array in local storage
    localStorage.setItem('users', JSON.stringify(users));

  }

  login(username : string , password : string) : boolean {

    const userFrom : IUser[] = JSON.parse(localStorage.getItem('users') || '[]' );
    const user = userFrom.find(user => user.username === username && user.password === password);
    if(user){
      this.isAuthenticated= true ;
      return true ;
    }
    return true ;


  }
  private generateUserId(users: IUser[]): number {
    // Find the highest existing user ID and increment by 1
    const maxId = users.reduce((max, user) => (user.id > max ? user.id : max), 0);
    return maxId + 1;
  }


}
