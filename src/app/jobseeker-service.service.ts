import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobseekerServiceService {
  URL: string = 'http://localhost:8054/jobpost';

  constructor(private http: HttpClient) {}

  getAllJobPosts(): Observable<any> {
    return this.http.get<any>(this.URL + '/getalljobposts');
  }

  getAllJobSeekers(): Observable<any> {
    return null;
  }
}
