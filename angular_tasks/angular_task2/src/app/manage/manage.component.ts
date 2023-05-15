import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
})
export class ManageComponent implements OnInit {
  allUsers: User[] = [];
  constructor(private usersServices: UsersService, private router: Router) {}
  loadManageUsers(): void {
    this.usersServices.getUsers().subscribe((data) => {
      this.allUsers = data;
    });
  }
  ngOnInit(): void {
    this.loadManageUsers();
  }
  createRoute(): void {
    this.router.navigate(['manage', 'create']);
  }
}
