import { Component } from '@angular/core';
import { CounterService } from '../shared/counter.service';

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
  }
}
