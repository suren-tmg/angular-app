import { Component, OnInit } from '@angular/core';
import { Genre, GenresDto } from 'src/app/Model/movie';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css'],
})
export class GenresComponent implements OnInit {
  genres: Genre[] = [];
  constructor(private newsservice: NewsService) {}

  ngOnInit(): void {
    this.newsservice.getMovieGeners().subscribe((resp) => {
      this.genres = resp;
    });
  }
}
