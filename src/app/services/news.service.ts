import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenresDto, Movie, MovieCredits, MovieDto, MovieImages, MovieVideoDto } from '../Model/movie';
import { of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  baseUrl:string="https://api.themoviedb.org/3";
  apiKey:string="?api_key=de88deb8b9948f4ee94822f74c831882";
  constructor(private http: HttpClient) {}

  getMovies(type:string='upcoming',count:number=12) {
    return this.http.get<MovieDto>(
     `${this.baseUrl}/movie/${type}${this.apiKey}`
    ).pipe(switchMap(res=>{
      return of(res.results.slice(0,count))
    }));
  }

  getTvs(type:string='upcoming',count:number=12) {
    return this.http.get<MovieDto>(
     `${this.baseUrl}/TV/${type}${this.apiKey}`
    ).pipe(switchMap(res=>{
      return of(res.results.slice(0,count))
    }));
  }

  searchMovies(page:number=1,searchValue?:string) {
    if(searchValue){
      return this.http.get<MovieDto>(
        `${this.baseUrl}/search/movie${this.apiKey}&page=${page}&query=${searchValue}`
       ).pipe(switchMap(res=>{
         return of(res.results)
       }));
    }else{
    return this.http.get<MovieDto>(
     `${this.baseUrl}/movie/popular${this.apiKey}&page=${page}`
    ).pipe(switchMap(res=>{
      return of(res.results)
    }));
  }
  }

  getMovie(id:string){
    return this.http.get<Movie>(`${this.baseUrl}/movie/${id}${this.apiKey}`);
  }

  getMovieVideo(id:string) {
    return this.http.get<MovieVideoDto>(
     `${this.baseUrl}/movie/${id}/videos${this.apiKey}`
    ).pipe(switchMap(res=>{
      return of(res.results)
    }));
  }

  getMovieImages(id:string) {
    return this.http.get<MovieImages>(
     `${this.baseUrl}/movie/${id}/images${this.apiKey}`
    );
  }

  getMovieCredits(id:string) {
    return this.http.get<MovieCredits>(
     `${this.baseUrl}/movie/${id}/credits${this.apiKey}`
    );
  }

  getMovieGeners() {
    return this.http.get<GenresDto>(
     `${this.baseUrl}/genre/movie/list${this.apiKey}`
    ).pipe(switchMap(res=>{
      return of(res.genres)
    }));
  }
  searchMoviesByGenre(id:number,page:number=0){
    return this.http.get<MovieDto>(
      `${this.baseUrl}/discover/movie${this.apiKey}&with_genres=${id}&page=${page}`
     ).pipe(switchMap(res=>{
       return of(res.results)
     }));
  }
}
