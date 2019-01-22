import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';
import { PaginatedResult } from '../_models/pagination';
import { AlertifyjsService } from '../_services/alertifyjs.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  photoUrl: string;
  messageCount: number;
  messageAvailabe = false;

  constructor(public authService: AuthService, private userService: UserService, private alertify: AlertifyjsService) { }

  ngOnInit() {
    this.authService.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl);
      // this.userService.getMessages(
      //   this.authService.decodedToken.nameid, null, null, 'Unread').subscribe( (res) => {
      //     this.messageCount = res.pagination.totalItems;
      //   });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    return this.authService.logout();
  }
}
