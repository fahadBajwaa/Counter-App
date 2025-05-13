import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', 
})
export class CounterService {
  private _counterSubject = new BehaviorSubject<number>(0);
  counter$ = this._counterSubject.asObservable(); // Observable
  private _counterSignal = signal(0); // Angular Signal
  obs$ = new Observable(observer => {
    observer.next('A'); // emits 'A'
    observer.next('B'); // emits 'B'
    observer.complete();
  });

  increment() {
    const newVal = this._counterSubject.value + 1;
    this._counterSubject.next(newVal);
    this._counterSignal.set(this._counterSignal() + 1);
  }
  getCounterValue() {
    return this._counterSubject.value;
  }
  getCounterSignal() {
    return this._counterSignal;
  }
  getCounterSubject() {
    return this._counterSubject;
  }



  
}
