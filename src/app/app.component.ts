import { Component } from '@angular/core';
// Models
import { IUser } from './user/models/user.interface';
import { Observable } from 'rxjs';

// Services
import { UserService } from './user/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  users: Observable<IUser[]>
  constructor(
    protected userService: UserService
  ) {
  }
  ngOnInit() {
    this.userService.getPerson()
    .subscribe(
      (data) => {
        console.log(data)
        this.users = data['data'];
        console.log(this.users)
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
