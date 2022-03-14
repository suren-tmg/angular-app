import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieDto } from '../Model/movie';
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
}
