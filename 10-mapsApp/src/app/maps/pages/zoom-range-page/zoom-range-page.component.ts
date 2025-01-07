import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { Map } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

@Component({
  templateUrl: './zoom-range-page.component.html',
  styleUrl: './zoom-range-page.component.css',
})
export class ZoomRangePageComponent implements AfterViewInit {
  constructor() {}

  @ViewChild('map') divMap?: ElementRef;

  public zoom: number = 1;
  public map?: Map;

  ngAfterViewInit(): void {
    if (!this.divMap) throw new Error('El elemento HTML no fue encontrado');

    this.map = new Map({
      container: this.divMap.nativeElement, // container id
      style: 'https://demotiles.maplibre.org/style.json', // style URL
      center: [0, 0], // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });

    this.mapListeners();
  }

  mapListeners(): void {
    if (!this.map) throw new Error('Mapa no inicializado');
    this.map.on('zoom', () => {
      this.zoom = this.map!.getZoom();
    });

    this.map.on('zoomend', () => {
      if (this.map!.getZoom() < 1) {
        this.map!.zoomTo(1);
      }

      if (this.map!.getZoom() > 18) {
        this.map!.zoomTo(18);
      }
    });
  }

  zoomIn(): void {
    this.map?.zoomIn();
  }

  zoomOut(): void {
    this.map?.zoomOut();
  }

  zoomChanged(value: string): void {
    this.map?.zoomTo(Number(value));
  }
}
