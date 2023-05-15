import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { BehaviorSubject, Observable, Subject, filter, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserFullNamePipe } from '../shared/pipes/first-last-name.pipe';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private selectedUserSubject = new BehaviorSubject<User>({
    id: '',
    firstName: '',
    lastName: '',
    age: 0,
    login: '',
    password: '',
    isDeleted: true,
  });
  setSelectedUser(user: User) {
    this.selectedUserSubject.next(user);
  }
  getSelectedUser() {
    return this.selectedUserSubject.asObservable();
  }

  constructor(private http: HttpClient) {}
  private _url = 'http://localhost:3000/users';
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this._url);
  }

  public getActiveUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(`${this._url}`)
      .pipe(map((data) => data.filter((user) => user.isDeleted === false)));
  }

  public getDeletedUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(`${this._url}`)
      .pipe(map((data) => data.filter((user) => user.isDeleted === true)));
  }

  public createUser(newUser: User): Observable<any> {
    return this.http.post(this._url, newUser);
  }

  public updateUser(updatedData: any, id: string): Observable<any> {
    return this.http.patch(`${this._url}/${id}`, updatedData);
  }

  public deactivateUser(id: string): any {
    return this.http.patch(`${this._url}/${id}`, { isDeleted: true });
  }

  public activateUser(id: string): any {
    return this.http.patch(`${this._url}/${id}`, { isDeleted: false });
  }
}
