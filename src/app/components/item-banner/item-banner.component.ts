import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/Model/movie';

@Component({
  selector: 'item-banner',
  templateUrl: './item-banner.component.html',
  styleUrls: ['./item-banner.component.css']
})
export class ItemBannerComponent {
  @Input() items:Movie[]=[];
  @Input() title:string="";
}
