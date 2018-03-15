import { Pipe, PipeTransform } from '@angular/core';

import { URL_SERVER } from '../config/config';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(image: string, collection: string = 'users'): any {

    let url = URL_SERVER + '/images';

    if (!image) {
      return url + '/users/xxx';
    }
    if (image.indexOf('https') >= 0) {
      return image;
    }

    switch (collection) {
      case 'users':
        url += `/users/${ image }`;
      break;
      case 'doctors':
        url += `/doctors/${ image }`;
      break;

      case 'hospitals':
        url += `/hospitals/${ image }`;
      break;

      default:
      console.log(`This type ${collection} not exists`);
        url += '/users/xxx';
    }
    return url;
  }

}
