import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SearchFilterService } from 'src/app/services/search-filter.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {

  searchFilterForm:FormGroup
   T:any
  constructor(private searchFiterService:SearchFilterService) { }

  ngOnInit() {
    this.searchFiterService.displayByScore().subscribe(
      (data)=>{
        this.T=data.matches
      }
    )
  }


}
