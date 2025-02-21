import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jobpost } from './Jobpost';

@Injectable({
  providedIn: 'root'
})
export class EmployerServiceService {
  constructor(private http:HttpClient) { }
 
  URL:string="http://localhost:8054/jobpost";
 
  addJobPost(jobpost:Jobpost):Observable<any>{
        return this.http.post(this.URL+"/addjobpost",jobpost,{responseType:'json'});
  }
 
  getAllJobPost():Observable<any>{
    return this.http.get<any>(this.URL+"/getalljobposts");
  }
 
  deleteJobPostbyID(id:number):Observable<any>{
    return this.http.delete(this.URL+"/deletejobpost/"+id);
  }
 
  // updateJobPost(id:number,jobpost:Jobpost):Observable<any>{
  //   retun
  // }
  updateJobPost(id:number,jobpost:Jobpost):Observable<any>{
    return this.http.put(this.URL+"/"+id,jobpost,{ responseType:'json'});
  }
 
  getJobPostbyId(id:number):Observable<any>{
    return this.http.get(this.URL+"/getJobbyId/"+id);
  }
}
