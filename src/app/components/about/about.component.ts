import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/services/about.service';
import { About } from 'src/app/interfaces/about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent  {

  about_info:About []=[] ; 

 constructor( private about_service : AboutService){}
   ngOnInit(): void {
    this.about_service.getAboutInfo().subscribe(
      (info) => {
        this.about_info.push(info)
      }
    ) 
  
  }
 
}
