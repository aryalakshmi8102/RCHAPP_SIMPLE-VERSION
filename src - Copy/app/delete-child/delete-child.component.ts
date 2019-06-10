import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import { ApiService } from '../_service/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete-child',
  templateUrl: './delete-child.component.html',
  styleUrls: ['./delete-child.component.css']
})
export class DeleteChildComponent implements OnInit {
  UserSession :string;
  currentUser:any;
  allchildrchs:any;
  showMsg: boolean = false;

  constructor(
    private http: HttpClient, 	   
  	private router: Router,
    private data: ApiService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.UserSession = JSON.parse(localStorage.getItem('UserSession'));
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(!this.UserSession){
      this.router.navigateByUrl('');
    }


    this.data.getallChildrch(this.currentUser.anganwadiId).subscribe(response => {
     
     
     if(response!=0){
      this.allchildrchs = response;
      console.log("allchildrchs = "+this.allchildrchs.rchId);
     
     }
    }
  );

  }



  onclickdeleteChild(id:any){

    if(confirm("Are you sure to delete "+id)) {

      this.showMsg= true;

      this.data.deleteChildRCH(this.currentUser.anganwadiId,id).subscribe( response => {
       
        this.allchildrchs.splice(this.allchildrchs.findIndex(e => e.rchId == id),1);
  
        location.reload(); 
       
    
      },
      error => {
        alert('RCH Data not Deleted');
        console.log(error);
      }
    );

    }

  

  }


 




}
