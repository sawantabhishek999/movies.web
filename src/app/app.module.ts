import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ToastrModule } from 'ngx-toastr';
import { MoviesModule } from './movies/movies.module';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      MoviesModule,
   //    ToastrModule.forRoot({
   //       timeOut: 3500,
   //       positionClass: 'toast-bottom-center',
   //       preventDuplicates: true,
   //   }),
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
