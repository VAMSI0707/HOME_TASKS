import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css'],
})
export class UserdetailComponent implements OnInit {
  constructor(private router: Router, private usersService: UsersService) {}
  @Input() id: string | any;
  url: string = this.router.url;
  userData: User | any = {}; 

  ngOnInit(): void {
    this.usersService.getSelectedUser().subscribe((data) => {
      this.userData = data;
    });
  }


}
