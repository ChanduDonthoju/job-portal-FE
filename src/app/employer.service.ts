import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployerService {
  getAllEmployers(): Observable<any> {
    return this.http.get<any>('/api/employ');
  }

  constructor(private http: HttpClient) {}
}
