import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { About } from '../interfaces/about';
import { Observable } from 'rxjs';

const header = {
  headers: new HttpHeaders({
    'Content-type' : "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private apiUrl = "http://localhost:3000/about"
  constructor(
    private server : HttpClient
  ) { }

  getAboutInfo():Observable<About> {
   let response= this.server.get<About>(`${this.apiUrl}` , header)
    console.log(response)
    return response;
  }
}
