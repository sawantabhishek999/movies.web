import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
declare var $: any;

@Component({
  selector: 'app-querybuilder',
  templateUrl: './querybuilder.component.html',
  styleUrls: ['./querybuilder.component.css']
})
export class QuerybuilderComponent implements OnInit {
  movies: any[];
  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    console.log($);
    $(document).ready(function () {
      const rules_basic = {
        condition: 'AND',
        rules: [{
          id: 'popularity_f',
          operator: 'greater',
          value: 10.25
        }, {
          condition: 'OR',
          rules: [{
            id: 'genre_ids_is',
            operator: 'equal',
            value: 28
          }, {
            id: 'genre_ids_is',
            operator: 'equal',
            value: 12
          }]
        }]
      };
      
      $('#builder').queryBuilder({
        plugins: ['bt-tooltip-errors'],

        filters: [{
          id: 'name',
          label: 'Name',
          type: 'string'
        }, {
          id: 'popularity_f',
          label: 'Popularity',
          type: 'double',
          validation: {
            min: 0,
            step: 0.01
          },
          operators: ['equal', 'less', 'greater', 'between']
        }, {
          id: 'vote_count_i',
          label: 'Vote Count',
          type: 'integer',
          validation: {
            min: 0,
            step: 1
          },
          operators: ['equal', 'less', 'greater', 'between']
        }, {
          id: 'id',
          label: 'Id',
          type: 'integer',
          operators: ['equal'],
        },
        {
          id: 'original_language_s',
          label: 'Original Language',
          type: 'string',
          placeholder: 'Enter original language',
        },
        {
          id: '"title_s',
          label: 'Title',
          type: 'string',
          placeholder: 'Enter title',
        },
        {
          id: 'genre_ids_is',
          label: 'Genre',
          type: 'integer',
          input: 'select',
          placeholder: 'Select genre',
          values: {
            28: 'Action',
            12: 'Adventure',
            16: 'Animation',
            35: 'Comedy',
            80: 'Crime',
            99: 'Documentary',
            18: 'Drama',
            10751: 'Family',
            14: 'Fantasy',
            36: 'History',
            27: 'Horror',
            10402: 'Music',
            9648: 'Mystery',
            10749: 'Romance',
            878: 'Science Fiction',
            10770: 'TV Movie',
            53: 'Thriller',
            10752: 'War',
            37: 'Western'
          },
          operators: ['equal'],
        }, {
          id: 'vote_average_f',
          label: 'Vote Average',
          type: 'double',
          operators: ['equal', 'less', 'greater', 'between']
        }, {
          id: 'release_date_dt',
          label: 'Release Date',
          type: 'date',
          operators: ['equal', 'less', 'greater', 'between']
        }
          //  {
          //   id: 'id',
          //   label: 'Identifier',
          //   type: 'string',
          //   placeholder: '____-____-____',
          //   operators: ['equal', 'not_equal'],
          //   validation: {
          // 	format: /^.{4}-.{4}-.{4}$/
          //   }
          // }
        ],
        rules: rules_basic
      });
    });
  }

  reset() {
    $('#builder').queryBuilder('reset');
  }

  submit() {
    const result = $('#builder').queryBuilder('getRules');
    if (result) {
      this.movieService.getMovies(result)
        .subscribe(res => {
          console.log(res);
          this.movies = res;
        });
    }
    else {
      console.log('invalid object :');
    }
    console.log(result);
  }
}
