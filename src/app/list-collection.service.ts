import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { DvdItem } from './dvd-item';

@Injectable({ providedIn: 'root' })
export class ListCollectionService {

  private details = new Subject<boolean>(); // przekazywanie info o możliwości wyświetlania detali o klikniętym filmie
  show$ = this.details.asObservable();

  private filterText = new Subject<string>(); // przekazywanie info o wprowadzanym w wyszukiwarkę filmie  - po tytule lub reżyserze
  filter$ = this.filterText.asObservable();

  private thisDvd = new Subject<DvdItem>(); // przekazywanie info o klikniętym filmie
  selected$ = this.thisDvd.asObservable();

  public showDetails(value: boolean) {
    this.details.next(value);
  }

  public moviesFilter(value: string) {
    this.filterText.next(value);
  }

  public thisMovie(value: DvdItem) {
    this.thisDvd.next(value);
  }

  constructor() { }

}