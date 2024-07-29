import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MapService } from './map.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  address: string = '';
  latitude: number = 0;
  longitude: number = 0;
  selectedAddress: boolean = false;

  @ViewChild('mapContainer', { static: false }) gmap!: ElementRef;
  @ViewChild('search', { static: false }) searchElementRef!: ElementRef;
  showMap = false;

  constructor(private ngZone: NgZone, private mapService: MapService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.loadGoogleMapsApi().then(() => {
      this.mapService.initializeMap(this.gmap);
      this.mapService.initializeAutocomplete(this.searchElementRef, (lat: number, lng: number) => {
        this.latitude = lat;
        this.longitude = lng;
        this.showMap = true;
        this.selectedAddress = true;
        this.mapService.updateLocationOnMap(this.latitude, this.longitude);
      });
    });
  }

  private loadGoogleMapsApi(): Promise<void> {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsApiKey}&libraries=places`;
      script.onload = () => resolve();
      document.body.appendChild(script);
    });
  }
}
