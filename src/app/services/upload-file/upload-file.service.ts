import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { URL_SERVER } from '../../config/config';


@Injectable()
export class UploadFileService {

  constructor() { }

  uploadFile( file: File, collection: string, id: string) {

    return new Observable((observer): any => {
      const formData = new FormData();
      const xhr = new XMLHttpRequest();

      formData.append('image', file, file.name);

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            observer.next({title: 'Great!', message: 'File uploaded successfully', result: 'success', info: JSON.parse(xhr.response)});
            observer.complete();
          } else {
            observer.error({title: 'Oohh!', message: 'Something went wrong', result: 'warning', info: JSON.parse(xhr.response)});
          }
        }
      };

      const url = `${URL_SERVER}/upload/${collection}/${id}`;
      xhr.open('PUT', url, true);
      xhr.send(formData);

    });
  }

}
