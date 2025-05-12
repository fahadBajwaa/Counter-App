import { Component } from '@angular/core';
import { IncrementerComponent } from './incrementer/incrementer.component';
import { DisplayComponent } from './display/display.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [IncrementerComponent, DisplayComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {}
