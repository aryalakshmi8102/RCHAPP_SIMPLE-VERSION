import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import { ApiService } from '../_service/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-child-rch',
  templateUrl: './child-rch.component.html',
  styleUrls: ['./child-rch.component.css']
})
export class ChildRCHComponent implements OnInit {
  UserSession :string;
  currentUser:any;
  userId:any;
  allchildrchs:any;
  allchildrchslist:any;
  

  task: string;
  childrchs:any;
  tasks = [];


  showMsg: boolean = false;


  //rchForm: FormGroup;
  //submitted = false;
  //success = false;

  
 
  onClick(){
    
    
    let val =   this.tasks.find(e => e.rchid == this.task);
    let val1 =   this.allchildrchslist.find(e => e.rchId == this.task);
    if((val != undefined)||(val1 != undefined)){

      console.log('Value Exist');
      alert('Value Exist');
      return;
    }
   
    var count = ( (''+this.task).length);
    if(this.task != undefined && this.task != null && count == 12){
      this.tasks = this.tasks.reverse();
      this.tasks.push({rchid: this.task});
      this.tasks = this.tasks.reverse();
    
     
    }
  
    this.task = '';
  };

  
 

  constructor( 
    private http: HttpClient, 	   
  	private router: Router,
    private data: ApiService,
    private formBuilder: FormBuilder
  ) { 

  }

  ngOnInit() {

   
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    //this.tasks = JSON.parse(localStorage.getItem('tasks'));

   
    this.UserSession = JSON.parse(localStorage.getItem('UserSession'));
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(!this.UserSession){
      this.router.navigateByUrl('');
    }


    
    this.data.getallChildrchListDetails(this.currentUser.anganwadiId).subscribe(response => {
     
      if(response!=0){
       this.allchildrchs = response;
       console.log("allchildrchs = "+this.allchildrchs.rchId);
      
      }
     }
   );


//list


 this.data.getallChildrch(this.currentUser.anganwadiId).subscribe(response => {
     
     
     if(response!=0){
      this.allchildrchslist = response;
      console.log("allchildrchs = "+this.allchildrchslist.rchId);
     
     }
    }
  );








   
  }
//validation
 // onSubmit() {
   // this.submitted = true;

   // if (this.rchForm.invalid) {
      //  return;
    //}

   // this.success = true;
//}

//validation


  onclickchildRCH(){
    this.showMsg= true;
    this.data.getchildRCH(this.tasks,this.currentUser.anganwadiId,this.currentUser.userId).subscribe( response => {
      location.reload(); 
     // if(response > 0){
      //  alert('Successfully Submitted');
        //   this.router.navigateByUrl('/home');
  
     // }
    
     // else{
       //  alert("sucess");
       //  this.router.navigateByUrl('/home');
      // }

     
     // alert('RCH Data Successfully Saved');
     // this.router.navigateByUrl('/home');
     
  
    },
    error => {
      alert('RCH Data not saved');
      console.log(error);
    }
  );
  }



  onclickdeleteChild(id:any){

    if(confirm("Do you wish to delete "+id)) {

      this.showMsg= true;

      this.data.deleteChildRCH(this.currentUser.anganwadiId,id).subscribe( response => {
       
        this. allchildrchslist.splice(this. allchildrchslist.findIndex(e => e.rchId == id),1);
  
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
