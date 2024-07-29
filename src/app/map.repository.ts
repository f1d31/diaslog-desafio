import { Injectable, NgZone, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapRepository {
  map!: google.maps.Map;
  autocomplete!: google.maps.places.Autocomplete;
  selectedLocation?: google.maps.Marker;

  constructor(private ngZone: NgZone) {}

  initializeMap(gmap: ElementRef): google.maps.Map {
    const mapOptions: google.maps.MapOptions = {
      center: new google.maps.LatLng(0, 0),
      zoom: 5,
    };
    this.map = new google.maps.Map(gmap.nativeElement, mapOptions);
    return this.map;
  }

  initializeAutocomplete(searchElementRef: ElementRef, callback: (lat: number, lng: number) => void): google.maps.places.Autocomplete {
    this.autocomplete = new google.maps.places.Autocomplete(
      searchElementRef.nativeElement,
      {
        types: ['address'],
      }
    );

    this.autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        const place: google.maps.places.PlaceResult = this.autocomplete.getPlace();
        if (place.geometry && place.geometry.location) {
          const latitude = place.geometry.location.lat();
          const longitude = place.geometry.location.lng();
          callback(latitude, longitude);
        }
      });
    });

    return this.autocomplete;
  }

  updateLocationOnMap(lat: number, lng: number): void {
    const position = new google.maps.LatLng(lat, lng);
    this.map.setCenter(position);
    if (this.selectedLocation) {
      this.selectedLocation.setMap(null);
    }
    this.selectedLocation = new google.maps.Marker({
      position,
      map: this.map,
      animation: google.maps.Animation.BOUNCE
    });
  }
}
