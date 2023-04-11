import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/interfaces/experience';
import { ExperienceService } from 'src/app/services/experience.service';
import AOS from 'aos';


@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit{
 

  experiences:Experience[]=[] ;
  constructor( private experienceService : ExperienceService){

  }
  
  ngOnInit(): void {
  AOS.init();
    this.experienceService.getExperienceList().subscribe(
      (item)=>{
        this.experiences = item;
      }
    );


  
    
    
    

   
  };
}

