import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute,private userService:UsersService) {}
  @Input() user: User | any;
  @Input() isDeleted: boolean | any;
  @Input() activateButton: boolean | any;
  @Input() deactivateButton: boolean | any;
  @Input() manageButton: boolean | any;
  @Output() public onData: EventEmitter<any> = new EventEmitter<any>();
  borderColor: string = '';
  
  viewUser: boolean = false;
  ngOnInit(): void {
    if (this.user.isDeleted) {
      this.borderColor = 'border:2px solid #ffcdb9';
    } else {
      this.borderColor = '  border: 2px solid #bef6be;';
    }
  }
  detail(): void {
    console.log(this.user.id);
    this.userService.setSelectedUser(this.user);
    this.router.navigate(['manage', this.user.id]);
    // this.onData.emit(this.user);

  }
}
