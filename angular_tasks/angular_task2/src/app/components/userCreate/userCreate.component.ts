import { Component } from '@angular/core';
import * as uuid from 'uuid';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';
import { ManageComponent } from 'src/app/manage/manage.component';

@Component({
  selector: 'userCreate',
  templateUrl: './userCreate.component.html',
  styleUrls: ['./userCreate.component.css'],
})
export class UserCreateComponent {
  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService,
    private manageComponent: ManageComponent
  ) {}
  get getFirstName() {
    return this.createUserForm.get('firstName');
  }
  createUserForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    login: ['', Validators.required],
    password: ['', Validators.required],
    age: ['', Validators.required],
  });
  // public userFormData:User|any=
  getUserFormData = (): User | any => {
    return {
      id: uuid.v4().slice(0, 8),
      firstName: this.createUserForm.value.firstName,
      lastName: this.createUserForm.value.lastName,
      login: this.createUserForm.value.login,
      password: this.createUserForm.value.password,
      age: this.createUserForm.value.age,
      isDeleted: false,
    };
  };
  onSubmit() {
    this.userService.createUser(this.getUserFormData()).subscribe((data) => {
      this.manageComponent.loadManageUsers();
      this.createUserForm.reset();
    });
  }
}
