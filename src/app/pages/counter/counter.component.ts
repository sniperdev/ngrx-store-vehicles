import { Component } from '@angular/core';
import {ChipsModule} from "primeng/chips";
import {ButtonModule} from "primeng/button";
import {CounterFacade} from "../../../store/counter/counter.facade";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [
    ChipsModule,
    ButtonModule,
    AsyncPipe,
  ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  protected counter$: Observable<number> = this.counterFacade.counter$;

  constructor(private counterFacade: CounterFacade) {}

  protected increment(): void{
    this.counterFacade.increment();
  }

  protected decrement(): void{
    this.counterFacade.decrement();
  }
}
