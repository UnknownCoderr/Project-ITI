import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  allMovies:any[]=[];
  constructor(private MovieService:DataService){ }

  ngOnInit(): void{
    this.MovieService.getAllMovies().subscribe({next:(MovieData)=>{
      console.log(MovieData.movies)
      this.allMovies=MovieData.movies
    }
    })
  }
}
