import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { SliderComponent } from './components/slider/slider.component';
import {  BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemBannerComponent } from './components/item-banner/item-banner.component';
import { ItemComponent } from './components/item/item.component';
import { MovieComponent } from './pages/movie/movie.component';
import {PaginatorModule} from 'primeng/paginator';
import {TabViewModule} from 'primeng/tabview';
import { VideoEmbedComponent } from './components/video-embed/video-embed.component';
import {ImageModule} from 'primeng/image';
import {Carousel, CarouselModule} from 'primeng/carousel';
import { GenresComponent } from './pages/genres/genres.component';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent,
    ItemBannerComponent,
    ItemComponent,
    MoviesComponent,
    MovieComponent,
    VideoEmbedComponent,
    GenresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PaginatorModule,
    TabViewModule,
    ImageModule,
    CarouselModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
