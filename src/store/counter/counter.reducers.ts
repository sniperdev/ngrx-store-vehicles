import {createReducer, on} from "@ngrx/store";
import * as CounterActions from "./counter.actions";

export interface ICounterState {
  value: number;
}

const initialState: ICounterState = {
  value: 0,
}

export const counterReducer = createReducer(
  initialState,
  on(
    CounterActions.increment,
    state => ({ ...state, value: state.value + 1 })
  ),
  on(
    CounterActions.decrement,
    state => ({ ...state, value: state.value - 1 })
  )
);
