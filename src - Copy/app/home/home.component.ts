import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  UserSession :string;
  currentUser:any;


  constructor(private router: Router,) { }

  ngOnInit() {

    this.UserSession = JSON.parse(localStorage.getItem('UserSession'));
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(!this.UserSession){
      this.router.navigateByUrl('');
    }

  }

}
