import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';



@Component({
  selector: 'page-rxjs',
  templateUrl: './page-rxjs.component.html',
  styles: []
})
export class PageRxjsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  constructor() {

    this.subscription = this.returnObservable()
      .retry(2)
      .subscribe(
        // first callback manage information sent by next()
        (number: number) => {
          console.log('Observable ', number);
        },
        // second callback manage errors sent by error()
        err => console.log(err),
        // third callback advice when the observable is completed sent by complete()
        () => console.log('Finished!')

      );

  }

  ngOnInit() {
  }


  returnObservable(): Observable<any> {
    return new Observable(observer => {
      let counter = 0;
      const interval = setInterval(() => {
        counter++;

        const output = {
          value: counter
        };

        observer.next(output);

      }, 1000);
    }).retry(2)
    .map((res: any) => {
      return res.value;
    })
    .filter((number: number, index) => {
      // Filter operator always should return true or false
      return (number % 2 === 1) ? true : false;
    });
  }

  ngOnDestroy() {

    this.subscription.unsubscribe();
  }

}
