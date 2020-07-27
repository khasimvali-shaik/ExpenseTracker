import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/services/expense.service';
import { Expense } from 'src/app/models/expense';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-expense',
  templateUrl: './list-expense.component.html',
  styleUrls: ['./list-expense.component.css']
})
export class ListExpenseComponent implements OnInit {

  expenses:Expense[] = [];
  constructor(private _expenseService:ExpenseService, private _router:Router) { }

  ngOnInit(): void {
    this.getExpense();
  }

  getExpense(){
    this._expenseService.getExpenses().subscribe(data=>this.expenses=data);
  }

  addExpense(){
    this._router.navigate(["/addexpense"]);
  }

  editExpense(id:number){
    this._router.navigate(["/editexpense",id]);
  }

  deleteExpense(id:number){
    this._expenseService.deleteExpense(id).subscribe(data => {
      console.log(data);
      this.getExpense();    
    },
    error => console.log(error)
    );
  }

}
