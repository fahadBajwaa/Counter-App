import { Component } from '@angular/core';
import { CounterService } from '../shared/counter.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-incrementer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './incrementer.component.html',
})
export class IncrementerComponent {
  constructor(private _counterService: CounterService) {}
  increase() {
    this._counterService.increment();
  }

  ngOnInit(): void {
    // Subscribing will execute the emission logic
    this._counterService.obs$.subscribe(val => console.log(val + 'Incrementer Component'));
  }
}
