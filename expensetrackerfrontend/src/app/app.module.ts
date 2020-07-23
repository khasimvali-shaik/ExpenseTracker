import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ExpenseService } from './services/expense.service';
import { HttpClientModule } from '@angular/common/http';
import { ListExpenseComponent } from './components/list-expense/list-expense.component';
import { AddexpenseComponent } from './components/addexpense/addexpense.component';
import { Route } from '@angular/compiler/src/core';

const routers : Routes = [
  {path: 'expenses', component: ListExpenseComponent},
  {path: 'addexpense', component: AddexpenseComponent},
  {path: '', redirectTo: '/expenses', pathMatch: 'full'}
];
  

@NgModule({
  declarations: [
    AppComponent,
    ListExpenseComponent,
    AddexpenseComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routers)
  ],
  providers: [ExpenseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
