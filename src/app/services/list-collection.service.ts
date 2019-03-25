import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { DvdItem } from '../interfaces/dvd-item';

@Injectable({ providedIn: 'root' })
export class ListCollectionService {

  private details = new Subject<boolean>(); /** passing info about details of selected movie */
  show$ = this.details.asObservable();

  private filterText = new Subject<string>(); /** passing info about searched movie */
  filter$ = this.filterText.asObservable();

  private thisDvd = new Subject<DvdItem>(); /** passing info about selected movie */
  selected$ = this.thisDvd.asObservable();

  public showDetails(value: boolean) {
    this.details.next(value);
  };

  public moviesFilter(value: string) {
    this.filterText.next(value);
  };

  public thisMovie(value: DvdItem) {
    this.thisDvd.next(value);
  };

  constructor() { }

}