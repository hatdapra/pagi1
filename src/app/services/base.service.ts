import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeriodicElement, city } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  // apiURL = `http://localhost:3000/elements`;
  // apiURL = `http://localhost/elements/db.php`;
  apiURL = `http://dhsrv/tools/elements/db.php`;
  cityURL = `http://dhsrv/tools/elements/city.php`;

  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<PeriodicElement[]>{
    return this.http.get<PeriodicElement[]>(`${this.apiURL}`);
  }

  getAllCity(): Observable<city[]>{
    return this.http.get<city[]>(`${this.cityURL}`);
  }

  insData(flag: string, data: any): void {
    switch (flag) {
      case "periodic":
        // let params: string = "jsonstr=" + JSON.stringify({flag: flag, data: data});
        /* let params: string = JSON.stringify({flag: flag, data: data});
        let url: string = `http://dhsrv/tools/elements/insert.php`;
        this.http.post<PeriodicElement>(url, params).subscribe(
          data => console.log(data),
          err=>console.error(err)
          ); */
        // console.log('base.insert ', flag, '; ', data);
        this.createPeriodicElement(data);
        break;
      case "city":
        break;
      default:
        break;
    }
  }

  createPeriodicElement(element: PeriodicElement):void{
    let url: string = `http://dhsrv/tools/elements/insert.php`;
    this.http.post<PeriodicElement>(url, JSON.stringify({data: element})).subscribe(
      data => console.log(data),
      err=>console.error(err)
      );
  }
}
