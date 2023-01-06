import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  matches:any={}
  searchForm:FormGroup
  constructor(private searchservice:SearchService) { }

  ngOnInit() {
  }
  search(){
    this.searchservice.search(this.matches).subscribe()
  }

}
