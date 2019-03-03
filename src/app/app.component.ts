import { Component } from '@angular/core';
import { FormModalComponent } from './form-modal/form-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My DVD Collection';
  searchText: string;

  constructor(private modalService: NgbModal) { }

  openFormModal() {
    const modalRef = this.modalService.open(FormModalComponent); // otwieranie modalu z dodaniem nowego filmu
  };

  passSearchText(searchText) { // metoda do wyszukiwarki filmu z listy, przekazuję dane
    this.searchText = searchText;
  };

}
