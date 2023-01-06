import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
news:any=[]
 
  constructor() { }

  ngOnInit() {
    this.news=[{id:1,title:"title1",description:"description1",author:"aymen",date:"04/08/2022",img:"assets/images/img_1.jpg",avatar:"assets/images/person_1.jpg"},
    {id:2,title:"title2",description:"description2",author:"abderrahmen",date:"04/08/2022",img:"assets/images/img_2.jpg",avatar:"assets/images/person_2.jpg"},
    {id:3,title:"title3",description:"description3",author:"islem",date:"04/08/2022",img:"assets/images/img_3.jpg",avatar:"assets/images/person_3.jpg"}
  ]
  }

}
