import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
@Input() matchInput:any
  constructor() { }

  ngOnInit() {
  }
color(scOne,scTwo){
  let result
if (scOne>scTwo) {
  result="green"
} else if (scTwo) {
  result="red"
}else{
  result="blue"
}
return result
}

score(scOne,scTwo){
  let result=""
if (scOne>scTwo) {
  result="0"
} else if (scTwo>scOne) {
  result="1"
}else{
  result="2"
}
return result
}
}







