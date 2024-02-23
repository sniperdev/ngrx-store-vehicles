import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {IAppState} from "../app.state";
import * as VehiclesActions from './vehicles.actions';

@Injectable({
  providedIn: 'root'
})
export class VehiclesFacade{
  public items$ = this.store.select(state=>state.vehicles.items);
  public loading$ = this.store.select(state=>state.vehicles.loading);
  public success$ = this.store.select(state=>state.vehicles.success);
  public error$ = this.store.select(state=>state.vehicles.error);

  constructor(private store: Store<IAppState>){}

  public loadVehiclesList(){
    this.store.dispatch(VehiclesActions.loadVehiclesList());
  }
  public clearVehiclesList(){
    this.store.dispatch(VehiclesActions.loadVehiclesListClear());
  }
}
