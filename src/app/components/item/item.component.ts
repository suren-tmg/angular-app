import { Component, Input, OnInit } from '@angular/core';
import { IMAGE_SIZES } from '../../constants/image-sizes';
import { Movie } from '../../Model/movie';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() itemData: Movie | null = null;
  readonly image_sizes = IMAGE_SIZES;
  constructor() {}

  ngOnInit(): void {}
}
