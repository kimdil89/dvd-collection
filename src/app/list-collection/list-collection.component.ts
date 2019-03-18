import { Component, OnInit } from '@angular/core';
import { DvdItem } from '../interfaces/dvd-item';
import { Router } from '@angular/router';
import { orderBy } from "lodash";
import { map } from 'lodash';
import { iteratee } from 'lodash';
import { ListCollectionService } from '../services/list-collection.service';
import { MyCollectionService } from '../services/my-collection.service';
import { AlertService } from 'src/app/services/alert.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-list-collection',
  templateUrl: './list-collection.component.html',
  styleUrls: ['./list-collection.component.css']
})
export class ListCollectionComponent implements OnInit {
  searchText: string;
  listOfDvds;
  selectedDvd: DvdItem;
  showDetails: boolean;
  // 

  constructor(private listCollectionService: ListCollectionService,
    private router: Router,
    private myCollectionService: MyCollectionService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.listCollectionService.filter$.subscribe((value: string) => {
      this.searchText = value;
    });
    this.listCollectionService.selected$.subscribe((value: DvdItem) => {
      this.selectedDvd = value;
    });
    this.myCollectionService.getMyCollection()
      .subscribe(
        // dvdTitle = map(this.listOfDvds, iteratee('title'));
        data => {
          this.listOfDvds = orderBy(data, ['title'], ['asc'])
        });
  }

  onSelect(dvd: DvdItem) { /** displaying details about selected dvd */
    this.selectedDvd = dvd;
    this.listCollectionService.thisMovie(this.selectedDvd);
    this.showDetails = true;
    this.listCollectionService.showDetails(this.showDetails);
  };

  onEdit(dvdId: number) { /** editing selected dvd */
    this.router.navigate(['/edit-movie', dvdId]);
  };

  onRemove(dvd: DvdItem) { /** removing selected dvd from collection */
    if (confirm("Are you sure you want to remove this movie from your collection?")) {
      this.myCollectionService.deleteFromCollection(dvd.id).subscribe(() =>
        this.alertService.showSuccess("You succesfully deleted the movie!"));
      this.showDetails = false;
      this.listCollectionService.showDetails(this.showDetails);
      setTimeout(function () { window.location.reload(); }, 2000);
    } else {
      // do nothing
    }
  };

  // insensitiveCase(a, b) {
  //   const titleA = a.titleA.toUpperCase();
  //   const titleB = b.titleB.toUpperCase();

  //   let comparison = 0;
  //   if (titleA > titleB) {
  //     comparison = 1;
  //   } else if (titleA < titleB) {
  //     comparison = -1;
  //   }
  //   return comparison;
  // }

}