import { Component, Input } from '@angular/core';
import { Experience } from 'src/app/interfaces/experience';
import { faCircleDot} from '@fortawesome/free-regular-svg-icons';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import {MatDialog} from '@angular/material/dialog';
import { ExperienceDetailsComponent } from './experience-details/experience-details.component';
@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent {
  constructor(public dialog: MatDialog){};

  @Input() experience:Experience = {
        company: "",
        freelance:false,
        start_date :"",
        end_date :"",
        current: false,
        job_position: "",
        task_detail: [],
        skills : "",
        knowledge:"",
        contacts: [{
          name: "",
          cel:"",
          linkedin:""
        }]

  };
  faCircleDot = faCircleDot;
  faRightLong=faRightLong;

  openDialog() {
    const dialogRef = this.dialog.open(ExperienceDetailsComponent,{
      panelClass:"detail_container", 
      data : {
        knowledge: this.experience.knowledge,
        contacts:this.experience.contacts[0]  
      }
    });
    dialogRef.afterClosed().subscribe(result => {
              console.log(`Dialog result: ${result}`);
      
    });
  }
}  


