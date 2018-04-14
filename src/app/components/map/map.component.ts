import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef} from '@angular/material';

import { Marker } from './../../models/googleMarker.model';

import { MapModalComponent } from '../map-modal/map-modal.component';

@Component({
  selector: 'map-elem',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;

  markers: Marker[] = [];

  constructor(
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.getStorage();
  }

  getStorage() {
    if (localStorage.getItem('markers')) {
      const markers = localStorage.getItem('markers');
      this.markers = JSON.parse(markers);
    }
  }

  addMarker(event) {
    const newMarker: Marker = {
      title: 'No title',
      description: 'No description',
      lat: event.coords.lat,
      lng: event.coords.lng,
    };

    this.markers.push(newMarker);
    this.addToStorage();
    this.snackBar.open('Marker added', 'Close', {duration: 3000});
  }

  addToStorage() {
    const storage = JSON.stringify(this.markers);
    localStorage.setItem('markers', storage);
  }

  deleteMarker(index) {
    this.markers.splice(index, 1);
    this.addToStorage();
    this.snackBar.open('Marker deleted', 'Close', {duration: 3000});
  }

  editMarker(marker: Marker) {
    const dialogRef = this.dialog.open(MapModalComponent, {
      width: '250px',
      data: marker
    });

    dialogRef.afterClosed().subscribe((data) => {
      console.log(data);
      if (data) {
        marker.title = data.title;
        marker.description = data.description;
        this.addToStorage();
      }
      this.snackBar.open('Marker updated', 'Close', {duration: 3000});

    });
  }

}
