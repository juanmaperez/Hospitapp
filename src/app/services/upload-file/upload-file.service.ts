import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { URL_SERVER } from '../../config/config';


@Injectable()
export class UploadFileService {

  constructor() { }

  uploadFile( file: File, collection: string, id: string) {

    return new Observable(() => {
      const formData = new FormData();
      const xhr = new XMLHttpRequest();

      formData.append('image', file, file.name);

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            return 'Image uploaded successfully';
          } else {
            return 'Error uploading image';
          }
        }
      };

      const url = `${URL_SERVER}/upload/${collection}/${id}`;
      xhr.open('PUT', url, true);
      xhr.send(formData);

    });
  }

}
