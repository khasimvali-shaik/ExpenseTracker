package com.example.ExpenseTracker.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.ExpenseTracker.models.Expense;
import com.example.ExpenseTracker.repositories.ExpenseRepository;

@Service
public class ExpenseServiceImpl implements ExpenseService {
	
	@Autowired
	private ExpenseRepository expenseRepository;
	
	@Override
	public List<Expense> findAll() {
		return expenseRepository.findAll();
	}

	@Override
	public Optional<Expense> findById(Long id) {
		
		return expenseRepository.findById(id);
	}

	@Override
	public Expense add(Expense expense) {
		return expenseRepository.save(expense);
	}

	
}
