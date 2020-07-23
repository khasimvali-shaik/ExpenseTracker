import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/services/expense.service';
import { Expense } from 'src/app/models/expense';

@Component({
  selector: 'app-list-expense',
  templateUrl: './list-expense.component.html',
  styleUrls: ['./list-expense.component.css']
})
export class ListExpenseComponent implements OnInit {

  expenses:Expense[] = [];
  constructor(private _expenseService:ExpenseService) { }

  ngOnInit(): void {
    this.getExpense();
  }

  getExpense(){
    this._expenseService.getExpenses().subscribe(data=>this.expenses=data);
  }

}
