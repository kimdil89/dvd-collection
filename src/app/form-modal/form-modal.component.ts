import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MyCollection } from '../my-collection';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent {
  myForm: FormGroup;
  listOfDvds = MyCollection;
  urlVal: string = "https?://www.+";

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'director': new FormControl(null, Validators.required),
      'year': new FormControl(null, [Validators.required, Validators.min(1930), Validators.max(2050)]),
      'link': new FormControl(null, [Validators.required, Validators.pattern(this.urlVal)])
    });
  }

  private onSubmit() {
    this.listOfDvds.push(this.myForm.value);
    this.myForm.reset();
    this.activeModal.close(this.myForm.value);
  }
}