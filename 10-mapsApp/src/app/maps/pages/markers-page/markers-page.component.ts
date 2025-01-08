import { Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'maplibre-gl';

@Component({
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css',
})
export class MarkersPageComponent {
  @ViewChild('map') divMap?: ElementRef;

  public map?: Map;
  public currentLngLat: LngLat = new LngLat(
    -65.65475865528936,
    7.653722858034143
  );

  ngAfterViewInit(): void {
    if (!this.divMap) throw new Error('El elemento HTML no fue encontrado');

    this.map = new Map({
      container: this.divMap.nativeElement, // container id
      style: 'https://demotiles.maplibre.org/style.json', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: 13, // starting zoom
    });

    const market = new Marker().setLngLat(this.currentLngLat).addTo(this.map);
  }
}
