import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
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
  searchValue: string | null = null;
  genreId: number | null = null;
  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      if (id) {
        this.genreId = id;
        this.getMoviesByGenre(id, 1);
      } else {
        this.getPagedMovies(1);
      }
    });
  }
  getPagedMovies(page: number = 0, searchValue?: string) {
    this.newsService.searchMovies(page, searchValue).subscribe((movies) => {
      this.moviesList = movies;
    });
  }

  getMoviesByGenre(id: number, page: number = 0) {
    this.newsService.searchMoviesByGenre(id, page).subscribe((movies) => {
      this.moviesList = movies;
    });
  }

  paginate(event: any) {
    if (this.genreId) {
      this.getMoviesByGenre(this.genreId, event.page + 1);
    } else {
      if (this.searchValue) {
        this.getPagedMovies(event.page + 1, this.searchValue);
      } else {
        this.getPagedMovies(event.page + 1);
      }
    }
  }

  SearchMovie() {
    if (this.searchValue) {
      this.getPagedMovies(1, this.searchValue);
    }
  }
}
