import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Experience } from '../interfaces/experience';
import { Observable } from 'rxjs';

const header = {
  headers: new HttpHeaders({
    'Content-type' : "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private apiUrl = "http://localhost:3000/experience"
 
  constructor( private server :HttpClient ) { }

  getExperienceList():Observable<Experience[]> {
    let response= this.server.get<Experience[]>(`${this.apiUrl}` , header)
     console.log(response)
     return response;
   }

}
