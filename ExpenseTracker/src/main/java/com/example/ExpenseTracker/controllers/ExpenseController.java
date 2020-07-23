package com.example.ExpenseTracker.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ExpenseTracker.models.Expense;
import com.example.ExpenseTracker.services.ExpenseService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")
public class ExpenseController {
	
	@Autowired
	private ExpenseService expenseService;
	
	@GetMapping("expenses")
	public ResponseEntity<List<Expense>> get(){
		List<Expense> expense = expenseService.findAll();
		return new ResponseEntity<List<Expense>>(expense,HttpStatus.OK);
	}
	
	@GetMapping("expense/{id}")
	public Optional<Expense> getById(@PathVariable(value = "id") Long expenseId) {
		return expenseService.findById(expenseId);
	}
	
	@PostMapping("expense")
	public Expense createExpense(@RequestBody Expense expense) {
		
		return expenseService.add(expense);
		
	}
	
	
	
	
	
	
	
	
	
	
	
}
