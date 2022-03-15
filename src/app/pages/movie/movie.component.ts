import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Movie,
  MovieCredits,
  MovieImages,
  MovieVideo,
} from '../../Model/movie';
import { NewsService } from 'src/app/services/news.service';
import { IMAGE_SIZES } from 'src/app/constants/image-sizes';
import { DomSanitizer } from '@angular/platform-browser';
import { first } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit,OnDestroy {
  singleMovie: Movie | null = null;
  movieVideos: MovieVideo[] = [];
  movieImages: MovieImages | null = null;
  movieCast: MovieCredits | null = null;
  readonly imageSizes = IMAGE_SIZES;
  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}
  ngOnDestroy(): void {
    console.log("destroyed");
  }

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getMovie(id);
    });
  }

  getMovie(id: string) {
    this.newsService.getMovie(id).subscribe((movieData) => {
      this.singleMovie = movieData;
      console.log(movieData);
    });

    this.newsService.getMovieVideo(id).subscribe((movieVideoData) => {
      this.movieVideos = movieVideoData;
    });

    this.newsService.getMovieImages(id).subscribe((movieVideoData) => {
      this.movieImages = movieVideoData;
    });

    this.newsService.getMovieCredits(id).subscribe((movieVideoData) => {
      this.movieCast = movieVideoData;
    });
  }

  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
