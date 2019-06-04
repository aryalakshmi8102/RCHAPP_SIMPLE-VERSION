import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  currentUser:any;

 
  public mainUrl='http://cstem.cstep.in/balkushalapptest';

  constructor(private http: HttpClient) { }


  



    
    getchildRCH(tasks:any,anganwadiId:any,userId:string): Observable<any>{
     // console.log(tasks);
    
      var arr = [];
      for (var i = 0; i < tasks.length; i++) {
          arr.push(tasks[i].rchid);
      }
       console.log(arr);


       //offline


       localStorage.setItem('arrayitems', JSON.stringify(arr));
       
     
       //offline end
    
  
    return this.http.post<any>(this.mainUrl +'/saverchinfolist/', { 
      
      
      
      anganwadiId:anganwadiId,
      userId:userId,
      beneficiaryType:"C", 
       rchIdList:arr,
    
     
    }
    )
  
    .pipe(map(response => {
  
      if (response.errorCode == 0 && response.responseObject!=null) {
       // console.log(response.responseObject);
        return response.responseObject;
      }else{
        return 0;
      }
  
        
    }));
  
  
  
   
  
  }


 




  getallChildrch(anganwadiId:any): Observable<any>{
  
   
 
   return this.http.post<any>(this.mainUrl +'/getrchinfolist/', { 
     
     anganwadiId:anganwadiId,
    
     beneficiaryType:"C", 
     
    
   }
   )
 
   .pipe(map(response => {
 
     if (response.errorCode == 0 && response.responseObject!=null) {
      // console.log(response.responseObject);
       return response.responseObject.rchIdList;
     }else{
       return 0;
     }
 
       
   }));
 
 
 
  
 
 }




 getallChildrchListDetails(anganwadiId:any): Observable<any>{
  
   
 
  return this.http.post<any>(this.mainUrl +'/getrchinfolist/', { 
    
    anganwadiId:anganwadiId,
   
    beneficiaryType:"C", 
    
   
  }
  )

  .pipe(map(response => {

    if (response.errorCode == 0 && response.responseObject!=null) {
     // console.log(response.responseObject);
      return response.responseObject;
    }else{
      return 0;
    }

      
  }));



 

}




 deleteChildRCH(anganwadiId:any,RchId:any): Observable<any>{
   
  return this.http.post<any>(this.mainUrl +'/deleterchinfolist/', { 
      
      
      
    anganwadiId:anganwadiId,
   
     rchIdList:[RchId]
  
   
  }
  )

  .pipe(map(response => {

    if (response.errorCode == 0 && response.responseObject!=null) {
     // console.log(response.responseObject);
      return response.responseObject;
    }else{
      return 0;
    }

      
  }));


 }



  getmotherRCH(tasks:any,anganwadiId:any,userId:string): Observable<any>{
    var arr = [];
    for (var i = 0; i < tasks.length; i++) {
        arr.push(tasks[i].rchid);
    }
    
  
    return this.http.post<any>(this.mainUrl +'/saverchinfolist/', { 
      
      
      anganwadiId:anganwadiId,
      userId:userId,
      beneficiaryType:"M", 

      rchIdList:arr,
     
    }
    )
  
    .pipe(map(response => {
  
      if (response.errorCode == 0 && response.responseObject!=null) {
       // console.log(response.responseObject);
        return response.responseObject;
      }else{
        return 0;
      }
  
        
    }));
  
  
  
   
  
  }



  






  getallMotherrchListDetails(anganwadiId:any): Observable<any>{
  
   
 
    return this.http.post<any>(this.mainUrl +'/getrchinfolist/', { 
      
      anganwadiId:anganwadiId,
     
      beneficiaryType:"M", 
      
     
    }
    )
  
    .pipe(map(response => {
  
      if (response.errorCode == 0 && response.responseObject!=null) {
       // console.log(response.responseObject);
        return response.responseObject;
      }else{
        return 0;
      }
  
        
    }));
  
  
  
   
  
  }








  getallMotherrch(anganwadiId:any): Observable<any>{
  
   
 
    return this.http.post<any>(this.mainUrl +'/getrchinfolist/', { 
      
      anganwadiId:anganwadiId,
     
      beneficiaryType:"M", 
      
     
    }
    )
  
    .pipe(map(response => {
  
      if (response.errorCode == 0 && response.responseObject!=null) {
       // console.log(response.responseObject);
        return response.responseObject.rchIdList;
      }else{
        return 0;
      }
  
        
    }));
  
  
  
   
  
  }




  
 deleteMotherRCH(anganwadiId:any,RchId:any): Observable<any>{
   
  return this.http.post<any>(this.mainUrl +'/deleterchinfolist/', { 
      
      
      
    anganwadiId:anganwadiId,
   
     rchIdList:[RchId]
  
   
  }
  )

  .pipe(map(response => {

    if (response.errorCode == 0 && response.responseObject!=null) {
     // console.log(response.responseObject);
      return response.responseObject;
    }else{
      return 0;
    }

      
  }));


 }



  
  

}
