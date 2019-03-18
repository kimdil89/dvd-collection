import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MyCollectionService } from 'src/app/services/my-collection.service';
import { AlertService } from 'src/app/services/alert.service';


@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent {
  myForm: FormGroup;
  listOfDvds;
  urlVal: string = "https?://www.+";

  constructor(public activeModal: NgbActiveModal,
    private myCollectionService: MyCollectionService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'director': new FormControl(null, Validators.required),
      'year': new FormControl(null, [Validators.required, Validators.min(1930), Validators.max(2050)]),
      'link': new FormControl(null, [Validators.required, Validators.pattern(this.urlVal)])
    });
  }

  onSubmit() {
    this.myCollectionService.updateMyCollection(this.myForm.value)
      .subscribe(
        (Response) => console.log(Response),
        (error) => console.log(error)
      );
    this.activeModal.close(this.myForm.value);
    this.alertService.showSuccess("You succesfully added a new movie!");
    setTimeout(function () { window.location.reload(); }, 2000);
  };

}