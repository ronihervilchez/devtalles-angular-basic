import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { LngLat, Map, Marker } from 'maplibre-gl';

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css',
})
export class MiniMapComponent implements AfterViewInit {
  @ViewChild('map') divMap?: ElementRef;
  @Input() lngLat: [number, number] = [0, 0];

  public map?: Map;
  public zoom: number = 15;

  ngAfterViewInit(): void {
    if (!this.divMap?.nativeElement)
      throw new Error('El elemento HTML no fue encontrado');
    if (!this.lngLat) throw new Error('Falta el valor de lngLat');

    // mapa
    this.map = new Map({
      container: this.divMap.nativeElement, // container id
      style: 'https://demotiles.maplibre.org/style.json', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
      interactive: false,
    });

    // marker

    const color = '#XXXXXX'.replace(/X/g, () =>
      ((Math.random() * 16) | 0).toString(16)
    );
    const lngLat = this.map.getCenter();
    this.addMarker(lngLat, color);
  }

  addMarker(lngLat: LngLat, color: string): void {
    if (!this.map) return;

    new Marker({
      color,
      draggable: false,
    })
      .setLngLat(lngLat)
      .addTo(this.map);
  }
}
