import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  moviesList: any[];
  count: number;
  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.movieService.currentMovies
    .subscribe(res => {
      this.moviesList = res;
    });
  }

}
