import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ManageComponent } from 'src/app/manage/manage.component';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'userUpdate',
  templateUrl: './userUpdate.component.html',
  styleUrls: ['./userUpdate.component.css'],
})
export class UserUpdateComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService,
    private manageComponent: ManageComponent
  ) {}
  userName: string = '';
  userId: string = '';

  userUpdateForm = this.formBuilder.group({
    password: ['', Validators.required],
    age: [0, Validators.required],
  });

  updateForm(): void {
    this.userService.getSelectedUser().subscribe((data) => {
      this.userUpdateForm.patchValue({
        password: data.password,
        age: data.age,
      });
      this.userName = data.firstName + ' ' + data.lastName;
      this.userId = data.id;
    });
  }

  ngOnInit(): void {
    this.updateForm();
  }

  updateUser(): void {
    this.userService
      .updateUser(this.userUpdateForm.value, this.userId)
      .subscribe((data) => {
        this.manageComponent.loadManageUsers();
      });
    alert('user updated');
  }
}
