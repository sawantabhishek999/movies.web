import { Component, OnInit } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'movies';
  /**
   *
   */
  constructor( 
    //private _toastrService: ToastrService,
    ) {
  

  }
  ngOnInit(): void {
   // throw new Error("Method not implemented.");
  }
}
