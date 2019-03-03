import { Component, OnInit } from '@angular/core';
import { FilterPipe } from '../filter.pipe';
import { ListCollectionService } from '../list-collection.service';

@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.css']
})
export class MoviesSearchComponent implements OnInit {

  constructor(private listCollectionService: ListCollectionService) { }

  ngOnInit() { }

  onInputChange(text) {
    this.listCollectionService.moviesFilter(text);
  };

}
