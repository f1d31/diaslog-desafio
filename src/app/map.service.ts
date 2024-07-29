import { Injectable, ElementRef } from '@angular/core';
import { MapRepository } from './map.repository';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  constructor(private mapRepository: MapRepository) {}

  initializeMap(gmap: ElementRef): void {
    this.mapRepository.initializeMap(gmap);
  }

  initializeAutocomplete(searchElementRef: ElementRef, callback: (lat: number, lng: number) => void): void {
    this.mapRepository.initializeAutocomplete(searchElementRef, callback);
  }

  updateLocationOnMap(lat: number, lng: number): void {
    this.mapRepository.updateLocationOnMap(lat, lng);
  }
}
