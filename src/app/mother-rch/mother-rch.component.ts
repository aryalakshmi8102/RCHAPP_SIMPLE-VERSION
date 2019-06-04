import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import { ApiService } from '../_service/api.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-mother-rch',
  templateUrl: './mother-rch.component.html',
  styleUrls: ['./mother-rch.component.css']
})
export class MotherRchComponent implements OnInit {

  UserSession :string;
  currentUser:any;
  userId:any;
  task: string;
  motherrchs:any;
  tasks = [];

  showMsg: boolean = false;
  allmotherrchs:any;
  allmotherrchslist:any;

 
 // onClick(){
   // this.tasks.push({rchid: this.task});
   // this.task = '';
 // }

 onClick(){
  var count = ( (''+this.task).length);
  if(this.task != undefined && this.task != null && count == 12){
    this.tasks = this.tasks.reverse();
    this.tasks.push({rchid: this.task});
    this.tasks = this.tasks.reverse();
  }
  this.task = '';
}

  constructor(
    private http: HttpClient, 	   
  	private router: Router,
    private data: ApiService
  ) { }

  ngOnInit() {
    this.UserSession = JSON.parse(localStorage.getItem('UserSession'));
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(!this.UserSession){
      this.router.navigateByUrl('');
    }

    this.data.getallMotherrchListDetails(this.currentUser.anganwadiId).subscribe(response => {
     
     
      if(response!=0){
       this.allmotherrchs = response;
       console.log("allchildrchs = "+this.allmotherrchs.rchId);
      
      }
     }
   );


   //list


 this.data.getallMotherrch(this.currentUser.anganwadiId).subscribe(response => {
     
     
  if(response!=0){
   this.allmotherrchslist = response;
   console.log("allmotherrchs = "+this.allmotherrchslist.rchId);
  
  }
 }
);




  }


  onclickmotherRCH(){
    this.showMsg= true;
    this.data.getmotherRCH(this.tasks,this.currentUser.anganwadiId,this.currentUser.userId).subscribe( response => {
      location.reload(); 
      
     
    },
    error => {
      alert('RCH Data not saved');
      console.log(error);
    }
  
  
    
  );
  }




  onclickdeleteMother(id:any){

    if(confirm("Do you wish to delete "+id)) {

      this.showMsg= true;

      this.data.deleteMotherRCH(this.currentUser.anganwadiId,id).subscribe( response => {
       
        this.  allmotherrchslist.splice(this.  allmotherrchslist.findIndex(e => e.rchId == id),1);
  
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
