package com.example.spring.model.repositories;

import com.example.spring.model.entities.Bill;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BillRepo extends JpaRepository<Bill, Long> {
    Page<Bill> findAll(Pageable pageable);
    Page<Bill> searchBillByFullNameIsContainingIgnoreCase(String name, Pageable pageable);
    Page<Bill> searchBillByStatusContainingIgnoreCaseAndPizzaTypeContainingIgnoreCase(String status, String pizzaType, Pageable pageable);
}
