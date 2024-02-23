import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class VehiclesService{
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient){}

  public loadVehiclesList(){
    const url = `${this.apiUrl}/vehicles`;
    return this.http.get(url).pipe(
      map((res:any)=>res.items)
    );
  }

}
