import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DvdItem } from '../dvd-item';
import { MyCollection } from '../my-collection';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ListCollectionService } from '../list-collection.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})

export class EditMovieComponent implements OnInit {
  editForm: FormGroup;
  listOfDvds = MyCollection;
  selectedDvd: DvdItem;
  urlVal: string = "https?://www.+";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private listCollectionService: ListCollectionService
  ) { }

  ngOnInit() {
    this.listCollectionService.selected$.subscribe((value: DvdItem) => {
      this.selectedDvd = value;
      console.log(value, "selected");
    });

    this.test();

    this.selectedDvd = {
      title: this.route.snapshot.params['title'],
      director: this.route.snapshot.params['director'],
      year: this.route.snapshot.params['year'],
      link: this.route.snapshot.params['link']
    };
    // this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       this.selectedDvd.title = params['title'];
    //       this.selectedDvd.director = params['director'];
    //       this.selectedDvd.year = params['year'];
    //       this.selectedDvd.link = params['link'];
    //     }
    //   );


    // let selectedMovie = this.route.snapshot.paramMap.get('selectedDvd');
    // this.listCollectionService.thisMovie(this.selectedDvd)
    //   .subscribe(selectedDvd => this.selectedDvd = selectedDvd);

    this.editForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'director': new FormControl(null, Validators.required),
      'year': new FormControl(null, [Validators.required, Validators.min(1930), Validators.max(2050)]),
      'link': new FormControl(null, [Validators.required, Validators.pattern(this.urlVal)])
      // 'fakeFormControl': new FormControl(null) // ukryty form control, potrzebny by przekazać zmieniający się boolean editMovie
    });

    // this.test();

    this.editForm.setValue({
      'title': this.selectedDvd.title,
      'director': this.selectedDvd.director,
      'year': this.selectedDvd.year,
      'link': this.selectedDvd.link
    });

  };

  onSubmit(): void {
    const index = this.listOfDvds.indexOf(this.selectedDvd);
    this.selectedDvd = this.editForm.value;
    this.listOfDvds[index] = this.selectedDvd;
    this.listCollectionService.thisMovie(this.selectedDvd);
    this.router.navigate(['']);
  };

  onCancel(editForm) {
    this.editForm.reset();
    this.router.navigate(['']);
  };

  test() {
    console.log(this.selectedDvd, "test");
  };

}