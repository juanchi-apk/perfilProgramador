import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Study } from '../interfaces/study';

const header = {
  headers: new HttpHeaders({
    'Content-type' : "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})

export class StudiesService {
  private apiUrl = "http://localhost:3000/studyes"
  constructor( private server :HttpClient ) { }

  getStudiesList():Observable<Study[]> {
    let response= this.server.get<Study[]>(`${this.apiUrl}` , header)
     return response;
  }


}