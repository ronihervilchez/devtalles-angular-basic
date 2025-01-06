import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { Map } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css',
})
export class FullScreenPageComponent implements AfterViewInit {
  constructor() {}

  @ViewChild('map') divMap?: ElementRef;

  ngAfterViewInit(): void {
    if (!this.divMap) throw new Error('El elemento HTML no fue encontrado');

    const map = new Map({
      container: this.divMap.nativeElement, // container id
      style: 'https://demotiles.maplibre.org/style.json', // style URL
      center: [0, 0], // starting position [lng, lat]
      zoom: 1, // starting zoom
    });
  }
}
