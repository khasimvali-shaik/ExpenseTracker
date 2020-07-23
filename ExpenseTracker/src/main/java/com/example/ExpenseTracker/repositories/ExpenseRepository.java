package com.example.ExpenseTracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ExpenseTracker.models.Expense;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Long>{

}
