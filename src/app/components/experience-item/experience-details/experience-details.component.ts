import { Component ,Inject, OnInit, Input } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-experience-details',
  templateUrl: './experience-details.component.html',
  styleUrls: ['./experience-details.component.css']
})
export class ExperienceDetailsComponent implements OnInit {

  @Input() knowledge:string="";
  @Input() contacts={
    name:"",
    cel:"",
    linkedin:""
};


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
 ) { }

 ngOnInit() {
  console.log(this.data.contacts)
  this.knowledge = this.data.knowledge
  this.contacts = {...this.data.contacts}

}
}
