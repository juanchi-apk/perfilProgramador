import { Component , OnInit} from '@angular/core';
import { Study } from 'src/app/interfaces/study';
import { StudiesService } from 'src/app/services/studies.service';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit{
  courses:Study[]=[]
  careers:Study[]=[]
  mode:ProgressSpinnerMode = "determinate";
  constructor( private studiesService : StudiesService){}

   ngOnInit(): void {
      this.studiesService.getStudiesList().subscribe(
      (item)=>{
        this.courses = item.filter(element=>{ return element.type == "course"})
        this.careers = item.filter(element=>{ return element.type == "career"})

      }

    );
  }
}
