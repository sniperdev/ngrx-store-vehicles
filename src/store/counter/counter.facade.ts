import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {IAppState} from "../app.state";
import * as CounterSelectors from "./counter.selectors";
import * as CounterActions from "./counter.actions";

@Injectable({
  providedIn: 'root'
})
export class CounterFacade {
  public counter$: Observable<number> = this.store.select(CounterSelectors.selectValue)

  constructor(private store: Store<IAppState>) {}

  public increment(): void {
    this.store.dispatch(CounterActions.increment());
  }

  public decrement(): void {
    this.store.dispatch(CounterActions.decrement());
  }
}
