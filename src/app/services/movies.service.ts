import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MoviesService {
  private movies = new BehaviorSubject([]);
  currentMovies = this.movies.asObservable();

  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient,
  ) {
  }


  getMovies(params: any) {
    return this.http.post(this.baseUrl + 'movies', params)
      .pipe(
        tap((res: any) => {
          this.movies.next(res.docs);
        }),
        map(data => data),
        catchError(err => this.handleError<any>(err))
      );
  }

  private handleError<T>(err: any): T[] {
    console.log(err);
    return err;
  }
}
