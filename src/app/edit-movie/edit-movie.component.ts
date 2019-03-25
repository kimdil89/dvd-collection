import { Component, OnInit } from '@angular/core';
import { DvdItem } from '../interfaces/dvd-item';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { MyCollectionService } from '../services/my-collection.service';
import { ListCollectionService } from '../services/list-collection.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})

export class EditMovieComponent implements OnInit {
  editForm: FormGroup;
  selectedDvd: DvdItem;
  urlVal: string = "https://www.+";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private listCollectionService: ListCollectionService,
    private myCollectionService: MyCollectionService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.listCollectionService.selected$.subscribe((value: DvdItem) => {
      this.selectedDvd = value;
      console.log(value, "selected");
    });

    this.route.paramMap
      .subscribe(params => {
        const dvdId = +params.get('id');
        if (dvdId) {
          this.getMovie(dvdId);
        }
      });

    this.editForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'director': new FormControl(null, Validators.required),
      'year': new FormControl(null, [Validators.required, Validators.min(1930), Validators.max(2050)]),
      'link': new FormControl(null, [Validators.required, Validators.pattern(this.urlVal)])
    });

  };

  getMovie(id: number) {
    this.myCollectionService.getMovie(id).subscribe(
      (dvd: DvdItem) => {
        this.editMovie(dvd);
        this.selectedDvd = dvd;
      },
      (err: any) => console.log(err)
    );
  };

  editMovie(dvd: DvdItem) {
    this.selectedDvd = dvd;
    this.editForm.patchValue({
      'title': this.selectedDvd.title,
      'director': this.selectedDvd.director,
      'year': this.selectedDvd.year,
      'link': this.selectedDvd.link
    });
  };

  onSubmit(): void {
    this.mapFormValuesToEditModal();
    this.myCollectionService.editMyCollection(this.selectedDvd)
      .subscribe(
        () => this.router.navigate(['']),
        (err: any) => console.log(err)
      );
    this.alertService.showSuccess("You succesfully edited the movie!");
  };

  mapFormValuesToEditModal() {
    this.selectedDvd.title = this.editForm.value.title;
    this.selectedDvd.director = this.editForm.value.director;
    this.selectedDvd.year = this.editForm.value.year;
    this.selectedDvd.link = this.editForm.value.link;
  };

  onCancel() {
    this.editForm.reset();
    this.router.navigate(['']);
  };

}