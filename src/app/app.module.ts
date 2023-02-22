import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { MoviesComponent } from './movies/movies.component';
import { HttpClientModule } from  '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    MoviesComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'movie',component:MoviesComponent},
      {path:'aboutus',component:AboutUsComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',component:PageNotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
