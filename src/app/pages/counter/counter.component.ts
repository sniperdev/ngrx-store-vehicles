import { Component } from '@angular/core';
import {ChipsModule} from "primeng/chips";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [
    ChipsModule,
    ButtonModule,
  ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

}
