import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/Model/movie';

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
  constructor() { }

  ngOnInit(): void {
  }

}
