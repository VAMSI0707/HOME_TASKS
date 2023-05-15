import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  OnInit,
} from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../interfaces/user';

@Injectable()
@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css'],
})
export class ActiveComponent implements OnInit {
  activeUsersData: User[] = [];
  constructor(private usersService: UsersService) {}
  loadActiveUsers(): void {
    this.usersService.getActiveUsers().subscribe((data) => {
      this.activeUsersData = data;
    });
  }
  ngOnInit(): void {
    this.loadActiveUsers();
  }
}
