import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { Marker } from './../../models/googleMarker.model';

@Component({
  selector: 'map-modal',
  templateUrl: './map-modal.component.html',
  styles: []
})
export class MapModalComponent implements OnInit {

  public form: FormGroup;

  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<MapModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Marker
  ) {

    this.form = fb.group({
      'title': data.title,
      'description': data.description,
    });
    console.log('in modalComponent', data);
  }

  ngOnInit() {
  }

  saveMarker() {
    this.dialogRef.close(this.form.value);
  }

  modalClose() {
    this.dialogRef.close();
  }

}
