package com.example.spring.model.repositories;

import com.example.spring.model.entities.Bill;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BillRepo extends JpaRepository<Bill, Long> {
    Page<Bill> findAll(Pageable pageable);
    Page<Bill> searchBillByFullNameIsContainingIgnoreCase(String name, Pageable pageable);
    Page<Bill> searchBillByStatusContainingIgnoreCaseAndPizzaTypeContainingIgnoreCaseAndFullNameContainingIgnoreCase(String status, String pizzaType, String name, Pageable pageable);
}
