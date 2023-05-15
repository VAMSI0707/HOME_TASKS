import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: User[] = [
    {
      id: '1',
      firstName: 'kvs',
      lastName: '49',
      age: 20,
      login: 'v49',
      password: '1234',
      isDeleted: false,
    },
    {
      id: '2',
      firstName: 'kvamsi',
      lastName: '49',
      age: 20,
      login: 'kv49',
      password: '1234',
      isDeleted: true,
    },
    {
      id: '3',
      firstName: 'kvsashank',
      lastName: '49',
      age: 20,
      login: 'v49',
      password: '1234',
      isDeleted: false,
    },
    {
      id: '4',
      firstName: 'vs7',
      lastName: '49',
      age: 20,
      login: 'v49',
      password: '1234',
      isDeleted: false,
    },
    {
      id: '5',
      firstName: 'kvamsi7',
      lastName: '49',
      age: 20,
      login: 'kv49',
      password: '1234',
      isDeleted: true,
    },
    {
      id: '6',
      firstName: 'kvsashank',
      lastName: '49',
      age: 20,
      login: 'kv49',
      password: '1234',
      isDeleted: true,
    },
    {
      id: '7',
      firstName: 'kvamsisashank',
      lastName: '49',
      age: 20,
      login: 'kv49',
      password: '1234',
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
