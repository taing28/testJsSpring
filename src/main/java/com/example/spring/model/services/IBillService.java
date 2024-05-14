package com.example.spring.model.services;

import com.example.spring.model.entities.Bill;

import java.util.List;

public interface IBillService {
    List<Bill> showAll();
    Bill addNewBill(Bill newBill);
    Bill updateBill(Bill reBill);
    Boolean deleteBill(Long id);
    List<Bill> searchByName(String name);
    List<Bill> filterBill(String status, String pizzaType);

    Boolean existById(Long id);
}
