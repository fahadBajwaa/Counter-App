import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export class CounterService {
  private _counterSubject = new BehaviorSubject<number>(0);
  counter$ = this._counterSubject.asObservable(); // Observable
  private _counterSignal = signal(0); // Angular Signal

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
