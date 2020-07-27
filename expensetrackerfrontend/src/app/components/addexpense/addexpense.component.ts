import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addexpense',
  templateUrl: './addexpense.component.html',
  styleUrls: ['./addexpense.component.css']
})
export class AddexpenseComponent implements OnInit {
  expense: Expense = new Expense();
  constructor(private _expenseService:ExpenseService,
             private _router:Router, 
             private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const isIdPresent = this._activatedRoute.snapshot.paramMap.has('id');
    if(isIdPresent){
      const id = +this._activatedRoute.snapshot.paramMap.get('id');
      this._expenseService.updateExpense(id).subscribe(data => this.expense = data);
    }
  }

  addExpense(){
    return this._expenseService.addExpense(this.expense).subscribe(data => {
      console.log('data', data);
      this._router.navigate(["/expenses"])});
  }
  home(){
    this._router.navigate(['/expenses']);
  }
}
