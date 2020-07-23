import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private url = "http://localhost:8080/api/v1/expenses";

  constructor(private _httpClient:HttpClient) { }

  getExpenses():Observable<any>{
    return this._httpClient.get(this.url);
  }
}
