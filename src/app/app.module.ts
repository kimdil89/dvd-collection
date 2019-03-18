import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from './pipes/filter.pipe';
import { ToastrModule } from 'ng6-toastr-notifications';

import { AppComponent } from './app.component';
import { ListCollectionComponent } from './list-collection/list-collection.component';
import { MoviesSearchComponent } from './movies-search/movies-search.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FormModalComponent } from './add-movie/form-modal/form-modal.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { AppRouterComponent } from './app-router/app-router.component';

import { ListCollectionService } from './services/list-collection.service';
import { MyCollectionService } from './services/my-collection.service';
import { AlertService } from './services/alert.service';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'edit-movie/:id', component: EditMovieComponent }
];

@NgModule({
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule, 
    NgbModule.forRoot(), 
    RouterModule.forRoot(routes), 
    HttpClientModule,
    ToastrModule.forRoot()],

  declarations: [
    AppComponent, 
    ListCollectionComponent, 
    MoviesSearchComponent, 
    AddMovieComponent, 
    SingleMovieComponent, 
    MovieDetailsComponent, 
    EditMovieComponent, 
    FilterPipe, 
    AppRouterComponent, 
    FormModalComponent,],

  bootstrap: [
    AppRouterComponent],

  entryComponents: [
    FormModalComponent],

  providers: [
    ListCollectionService, 
    MyCollectionService,
    AlertService]
})

export class AppModule { }
