import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: User[] = [
    {
      id: '2a3bdac6',
      firstName: 'user',
      lastName: 'one',
      age: 12,
      login: 'jake123',
      password: '1234fdsf',
      isDeleted: false,
    },
    {
      id: '2a3bdac7',
      firstName: 'user',
      lastName: 'two',
      age: 12,
      login: 'user123',
      password: '1234fdsf',
      isDeleted: true,
    },
    {
      id: '2a3bdac1',
      firstName: 'user',
      lastName: 'three',
      age: 12,
      login: 'user3',
      password: '1234fdsf',
      isDeleted: false,
    },
    {
      id: '2a3bdac2',
      firstName: 'user',
      lastName: 'four',
      age: 12,
      login: 'user4',
      password: '1234fdsf',
      isDeleted: false,
    },
    {
      id: '2a3bdac3',
      firstName: 'user',
      lastName: 'five',
      age: 12,
      login: 'user5',
      password: '1234fdsf',
      isDeleted: true,
    },
    {
      id: '2a3bdac4',
      firstName: 'user',
      lastName: 'six',
      age: 12,
      login: 'user6',
      password: '1234fdsf',
      isDeleted: true,
    },
  ];
  constructor() {}
  private selectedUserSubject=new BehaviorSubject<User>(this.users[0]);
  public getUsers(): User[] {
    return this.users;
  }
  setSelectedUser(user:User){
    this.selectedUserSubject.next(user);
  }
  getSelectedUser(){
    return this.selectedUserSubject.asObservable();
  }
}
