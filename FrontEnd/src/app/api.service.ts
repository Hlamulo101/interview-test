import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getContacts(): Observable<any> {
    return this.http.get<any>("http://localhost:4201/api/heroes");
  }

  public postContacts(): Observable<any> {
    return this.http.post<any>("http://localhost:4201/api/heroes", {});
  }
}
