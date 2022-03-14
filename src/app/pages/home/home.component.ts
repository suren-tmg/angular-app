import { Component, OnInit } from '@angular/core';
import { Movie } from '../../Model/movie';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[]=[];
  upcomingMovies: Movie[]=[];
  topratedMovies: Movie[]=[];
  constructor(private mService: NewsService) {}

  ngOnInit(): void {
    this.mService.getMovies('popular').subscribe((movies) => {
      this.popularMovies = movies;
    });

    this.mService.getMovies('upcoming').subscribe((movies) => {
      this.upcomingMovies = movies;
    });

    this.mService.getMovies('top_rated').subscribe((movies) => {
      this.topratedMovies = movies;
    });
  }
}
