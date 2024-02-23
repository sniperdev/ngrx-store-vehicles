import { ICounterState } from './counter/counter.reducers';
import { IVehiclesState } from './vehicles/vehicles.reducers';

export interface IAppState {
  counter: ICounterState;
  vehicles: IVehiclesState;
}
