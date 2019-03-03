import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DvdItem } from '../dvd-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {
  @Input() selectedDvd: DvdItem;
  @Output() edit = new EventEmitter<DvdItem>();
  @Output() remove = new EventEmitter<DvdItem>();
  @Output() select = new EventEmitter<DvdItem>();

  constructor(private router: Router) { }

  ngOnInit() { }

  editMovie(dvd: DvdItem) {
    this.edit.emit(dvd);
  };

  deleteMovie(dvd: DvdItem) {
    this.remove.emit(dvd);
  };

  onSelect(dvd: DvdItem) {
    this.select.emit(dvd);
  };


}