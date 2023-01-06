import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  articles:any=[]
  constructor() { }
  
  ngOnInit() {
    this.articles=[{id:1,description:"description",author:"aymen",title:"title1",img:"",date:"04/08/2022"},
                  {id:2,description:"description",author:"islem",title:"title2",img:"",date:"04/08/2022"},
                  {id:3,description:"description",author:"taha",title:"title3",img:"",date:"04/08/2022"},
                  {id:4,description:"description",author:"yassine",title:"title4",img:"",date:"04/08/2022"},
                  {id:5,description:"description",author:"omar",title:"title5",img:"",date:"04/08/2022"}]
  }

}
