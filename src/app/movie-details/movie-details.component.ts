import { Component, OnInit } from '@angular/core';
import { DvdItem } from '../dvd-item';
import { ListCollectionService } from '../list-collection.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent implements OnInit {
  displayDetails: boolean;
  selectedDvd: DvdItem;

  constructor(private listCollectionService: ListCollectionService) {}

  ngOnInit() {
    this.listCollectionService.show$.subscribe((value: boolean) => { // odpowiada za wyświetlanie detali o filmie
      this.displayDetails = value;
    });

    this.listCollectionService.selected$.subscribe((value: DvdItem) => { // ściąga dane o detalach klikniętego filmu
      this.selectedDvd = value;
    });
  }


}