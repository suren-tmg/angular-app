import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieDto } from '../Model/movie';
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

  searchMovies(page:number=1) {
    return this.http.get<MovieDto>(
     `${this.baseUrl}/movie/popular${this.apiKey}&page=${page}`
    ).pipe(switchMap(res=>{
      return of(res.results)
    }));
  }

  getMovie(id:string){
    return this.http.get<Movie>(`${this.baseUrl}/movie/${id}${this.apiKey}`);
  }
}
