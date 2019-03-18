import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from './add-movie/form-modal/form-modal.component';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MY DVD COLLECTION';
  searchText: string;

  constructor(private modalService: NgbModal,
    public toastr: ToastrManager) { }


  openFormModal() {
    this.modalService.open(FormModalComponent); /** opening add-modal  */
  };

  passSearchText(searchText) { /** passing data to search box */
    this.searchText = searchText;
  };



}
