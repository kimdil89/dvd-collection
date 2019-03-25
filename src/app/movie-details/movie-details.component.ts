import { Component, OnInit } from '@angular/core';
import { DvdItem } from '../interfaces/dvd-item';
import { ListCollectionService } from '../services/list-collection.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent implements OnInit {
  displayDetails: boolean;
  selectedDvd: DvdItem;

  constructor(private listCollectionService: ListCollectionService) { }

  ngOnInit() {
    this.listCollectionService.show$.subscribe((value: boolean) => { /** displaying details about movie */
      this.displayDetails = value;
    });

    this.listCollectionService.selected$.subscribe((value: DvdItem) => { /** importing data about details of selected movie */
      this.selectedDvd = value;
    });
  }

}