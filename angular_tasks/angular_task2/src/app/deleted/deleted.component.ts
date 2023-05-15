import { Component, Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { UsersService } from '../services/users.service';

@Injectable()
@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.css'],
})
export class DeletedComponent {
  deletedUsers: User[] = [];
  constructor(private usersService: UsersService) {}
  loadDeletedUsers(): void {
    this.usersService.getDeletedUsers().subscribe((data) => {
      this.deletedUsers = data;
    });
  }
  ngOnInit(): void {
    this.loadDeletedUsers();
  }
}
