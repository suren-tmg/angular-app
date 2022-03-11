import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies: any = [];
  constructor(private mService: NewsService) {}

  ngOnInit(): void {
    this.mService.getMovies().subscribe((res:any) => {
      this.movies = res.results;
    });
  }
}
