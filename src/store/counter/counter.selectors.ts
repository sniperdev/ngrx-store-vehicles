import {IAppState} from "../app.state";
import {createSelector} from "@ngrx/store";
import {ICounterState} from "./counter.reducers";


export const selectCounter = (state: IAppState) => state.counter;

export const selectValue = createSelector(
    selectCounter,
    (state: ICounterState) => state.value
)
