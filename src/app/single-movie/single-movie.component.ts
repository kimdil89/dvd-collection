import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DvdItem } from '../interfaces/dvd-item';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {
  @Input() selectedDvd: DvdItem;
  @Output() edit = new EventEmitter<number>();
  @Output() remove = new EventEmitter<DvdItem>();
  @Output() select = new EventEmitter<DvdItem>();

  constructor() { }

  ngOnInit() { }

  editMovie(id: number) {
    this.edit.emit(id);
  };

  deleteMovie(dvd: DvdItem) {
    this.remove.emit(dvd);
  };

  onSelect(dvd: DvdItem) {
    this.select.emit(dvd);
  };

}