import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from './filter.pipe';

import { AppComponent } from './app.component';
import { ListCollectionComponent } from './list-collection/list-collection.component';
import { MoviesSearchComponent } from './movies-search/movies-search.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FormModalComponent } from './form-modal/form-modal.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { AppRouterComponent } from './app-router/app-router.component';

import { ListCollectionService } from './list-collection.service';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'edit-movie/:title/:director/:year/:link', component: EditMovieComponent }
];

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, NgbModule.forRoot(), RouterModule.forRoot(routes)],
  declarations: [AppComponent, ListCollectionComponent, MoviesSearchComponent, AddMovieComponent, SingleMovieComponent, MovieDetailsComponent, FormModalComponent, EditMovieComponent, FilterPipe, AppRouterComponent],
  bootstrap: [AppRouterComponent],
  entryComponents: [FormModalComponent],
  providers: [ListCollectionService]
})
export class AppModule { }
