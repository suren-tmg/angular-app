import { Component, OnInit } from '@angular/core';
import { IMAGE_SIZES } from 'src/app/constants/image-sizes';
import { Movie } from 'src/app/Model/movie';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  moviesList: Movie[] = [];
  readonly image_sizes = IMAGE_SIZES;
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getPagedMovies(1);
  }
  getPagedMovies(page: number = 0) {
    this.newsService.searchMovies(page).subscribe((movies) => {
      this.moviesList = movies;
    });
  }
  paginate(event: any) {
    this.getPagedMovies(event.page+1);
  }
}
