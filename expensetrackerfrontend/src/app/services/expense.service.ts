import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Expense } from '../models/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private url = "http://localhost:8080/api/v1/expenses";

  constructor(private _httpClient:HttpClient) { }

  getExpenses():Observable<any>{
    return this._httpClient.get(this.url);
  }

  addExpense(expense:Expense):Observable<any>{
    return this._httpClient.post(this.url,expense);
  }

  updateExpense(id:number): Observable<any>{
    return this._httpClient.get(`http://localhost:8080/api/v1/expense/${id}`);
  }

  deleteExpense(id:number){
    return this._httpClient.delete(`http://localhost:8080/api/v1/expense/${id}`);
  }
}
