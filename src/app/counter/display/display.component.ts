import { Component } from '@angular/core';
import { CounterService } from '../shared/counter.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-display',
  standalone: true,
  templateUrl: './display.component.html',
})
export class DisplayComponent {
  constructor(private _counterService: CounterService) {}
  counterValue: number | null = null;
  behaviorSubjectValue: number = 0; // manual subscription
  counterSignal = this._counterService.getCounterSignal(); // Signal

  ngOnInit(): void {
    this._counterService.counter$.subscribe((value) => {
      this.counterValue = value;
    });
    this._counterService.getCounterSubject().subscribe((val) => {
      this.behaviorSubjectValue = val;
    });

    // Subscribing will execute the emission logic
    // this._counterService.obs$.subscribe(val => console.log(val,'Display Component'));

    const observable = new Observable<number>((subscriber) => {
      subscriber.next(1);

      subscriber.next(2);

      setTimeout(() => {
        subscriber.next(3);

        subscriber.complete();
      }, 1000);
    });

    observable.subscribe((value) =>
      console.log('Observable Subscriber A:', value)
    );

    observable.subscribe((value) =>
      console.log('Observable Subscriber B:', value)
    );

    const subject = new Subject<number>();
    // console.log('These are Subject subscribers')

    subject.subscribe((value) => console.log('Subject Subscriber A:', value));

    subject.next(1);

    subject.next(2);

    subject.subscribe((value) => console.log('Subject Subscriber B:', value));

    subject.next(3);

    const behaviorSubject = new BehaviorSubject<number>(0); // initial value

    behaviorSubject.subscribe(value => console.log(' Behavior Subscriber A:', value));
    behaviorSubject.next(1);
    behaviorSubject.next(2);

    behaviorSubject.subscribe(value => console.log(' Behavior Subscriber B:', value));
    behaviorSubject.next(3);
  }
}
