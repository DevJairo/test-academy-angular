import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IUser, IUserResponse } from '../../models/user.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string
  knowFor: string
  profession: string
  gender: string
  constructor(private userService: UserService) { }

  ngOnInit(): void {
      this.userService.getPerson()
      .subscribe((response) => {
        const { profession } = response['data']
        const { knowFor } = response['data']
        const { name } = response['data']
        const { gender }  = response['data']
        this.knowFor = knowFor
        this.profession = profession
        this.name = `${name.first} ${name.last}`
        this.gender = gender
        }
      );
    
  }
  

}
