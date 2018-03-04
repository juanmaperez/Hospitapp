import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-promises',
  templateUrl: './page-promises.component.html',
  styles: []
})
export class PagePromisesComponent implements OnInit {

  constructor() {

    this.count3seconds()
    .then((msg) => {
      console.log('done', msg);
    })
    .catch(error => console.error('Error in primise.', error));

  }


  ngOnInit() {
  }

  count3seconds(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let counter = 0;
      const interval = setInterval(() => {
        counter++;
        console.log(counter);
        if (counter === 3) {
          resolve(true);
          // reject('Error!');
          clearInterval(interval);
        }
      }, 1000);
    });
  }

}
