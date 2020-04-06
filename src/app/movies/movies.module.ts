import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { QuerybuilderComponent } from './querybuilder/querybuilder.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieCardComponent } from './movies-list/movie-card/movie-card.component';
import { MoviesService } from '../services/movies.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    MoviesComponent,
    MoviesComponent,
    QuerybuilderComponent,
    MoviesListComponent,
    MovieCardComponent,
   // Querybuilder2Component
  ],
  providers: [MoviesService],
})
export class MoviesModule { }
