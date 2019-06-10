import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import { ApiService } from '../_service/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete-mother',
  templateUrl: './delete-mother.component.html',
  styleUrls: ['./delete-mother.component.css']
})
export class DeleteMotherComponent implements OnInit {
  UserSession :string;
  currentUser:any;
  allmotherrchs:any;
  showMsg: boolean = false;

  constructor(private http: HttpClient, 	   
  	private router: Router,
    private data: ApiService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {


    this.UserSession = JSON.parse(localStorage.getItem('UserSession'));
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(!this.UserSession){
      this.router.navigateByUrl('');
    }


    this.data. getallMotherrch(this.currentUser.anganwadiId).subscribe(response => {
     // this. allmotherrchs = response.responseObject.rchIdList;

    //console.log("getallchild rch  response = "+JSON.stringify(response));
    
     
     if(response!=0){
      this.allmotherrchs = response;
     
     
     }
    }
  );




  }



  onclickdeleteMother(id:any){
    if(confirm("Are you sure to delete "+id)) {
      this.showMsg= true;

      this.data.deleteChildRCH(this.currentUser.anganwadiId,id).subscribe( response => {
       
        this.allmotherrchs.splice(this.allmotherrchs.findIndex(e => e.rchId == id),1);
  
       // alert('RCH Data Deleted ');
  
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
