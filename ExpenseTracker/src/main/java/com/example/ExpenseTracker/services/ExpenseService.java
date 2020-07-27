package com.example.ExpenseTracker.services;

import java.util.List;
import java.util.Optional;



import com.example.ExpenseTracker.models.Expense;

public interface ExpenseService {
	
	List<Expense> findAll();

	Optional<Expense> findById(Long id);

	Expense add(Expense expense);

	void delById(Long expenseId);

	
	
	
	
	
}
