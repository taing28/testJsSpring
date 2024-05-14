package com.example.spring.model.services;

import com.example.spring.model.entities.Bill;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IBillService {
    Bill addNewBill(Bill newBill);
    Bill updateBill(Bill reBill);
    Boolean deleteBill(Long id);
    List<Bill> searchByName(String name, Pageable pageable);
    List<Bill> filterBill(String status, String pizzaType, Pageable pageable);

    Boolean existById(Long id);
}
