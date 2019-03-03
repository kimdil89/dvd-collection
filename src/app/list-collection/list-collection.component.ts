import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyCollection } from '../my-collection';
import { DvdItem } from '../dvd-item';
import { FilterPipe } from '../filter.pipe';
import { ListCollectionService } from '../list-collection.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-list-collection',
  templateUrl: './list-collection.component.html',
  styleUrls: ['./list-collection.component.css']
})
export class ListCollectionComponent implements OnInit {
  searchText: string;
  listOfDvds = MyCollection;
  selectedDvd: DvdItem;
  showDetails: boolean;

  constructor(private listCollectionService: ListCollectionService, private router: Router) {}

  ngOnInit() {
    this.listCollectionService.filter$.subscribe((value: string) => {
      this.searchText = value;
    });
    this.listCollectionService.selected$.subscribe((value: DvdItem) => {
      this.selectedDvd = value;
    });
  }

  onSelect(dvd: DvdItem) { // po kliknięciu na dany film, wyświetlają się detale w sekcji DETAILS
    this.selectedDvd = dvd;
    this.listCollectionService.thisMovie(this.selectedDvd);
    this.showDetails = true;
    this.listCollectionService.showDetails(this.showDetails);
  };

  onRemove(dvd: DvdItem) { // usunięcie klikniętego filmu z listy
    const index = this.listOfDvds.indexOf(dvd);
    this.listOfDvds.splice(index, 1);
    this.showDetails = false;
    this.listCollectionService.showDetails(this.showDetails);
  };

  onEdit(dvd: DvdItem) { // edycja klikniętego filmu
    this.selectedDvd = dvd;
    this.listCollectionService.thisMovie(this.selectedDvd);
    console.log(this.selectedDvd, "clicked Edit button");
    this.router.navigate(['/edit-movie/:title/:director/:year/:link']);
  };

}