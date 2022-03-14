import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../Model/movie';
import { NewsService } from 'src/app/services/news.service';
import { IMAGE_SIZES } from 'src/app/constants/image-sizes';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  singleMovie: Movie | null = null;
  readonly imageSizes = IMAGE_SIZES;
  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.getMovie(id);
    });
  }

  getMovie(id: string) {
    this.newsService.getMovie(id).subscribe((movieData) => {
      this.singleMovie = movieData;
      console.log(movieData);
    });
  }
}
