import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { IMAGE_SIZES } from '../../constants/image-sizes';
import { Movie } from '../../Model/movie';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations:[trigger('slideFade',[
    state('void',style({opacity:0})),
    transition('void<=>*',[animate('1s')]),
  ])]
})
export class SliderComponent implements OnInit {
@Input() items:Movie[]=[];
readonly image_size=IMAGE_SIZES;
CurrentSlideIndex:number=0;
  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      this.CurrentSlideIndex=++this.CurrentSlideIndex%this.items.length;
    },10000);
  }

}
