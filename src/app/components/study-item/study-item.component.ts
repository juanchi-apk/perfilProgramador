import { Component, OnInit, Input } from '@angular/core';
import { Study } from 'src/app/interfaces/study';

@Component({
  selector: 'app-study-item',
  templateUrl: './study-item.component.html',
  styleUrls: ['./study-item.component.css']
})
export class StudyItemComponent implements OnInit {


@Input () study:Study={
    course : "",
    type:"",
    duration :"",
    start : "",
    institution: "",
    keywords : [""],
    learned_skills: "",
    done: 0 
}
circleprop={
  backgroundColor :"transparent",
  outerStrokeGradient : true,
  outerStrokeColor : "#2db405",
  outerStrokeGradientStopColor : "#ffff00",
  titleColor : "#444444",
  unitsColor : "#444444",
  subtitleColor : "#A9A9A9"
 }
ngOnInit(): void {

}
}
