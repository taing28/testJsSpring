package com.example.spring.model.services;

import com.example.spring.model.entities.Bill;
import com.example.spring.model.repositories.BillRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class BillService implements IBillService {
    @Autowired
    private BillRepo billRepo;

    @Override
    public Bill addNewBill(Bill newBill) {
        return billRepo.save(newBill);
    }

    @Override
    public Bill updateBill(Bill reBill) {
        if(!existById(reBill.getId())){
            return null;
        }
        reBill.setUpdateDate(LocalDate.now());
        return billRepo.save(reBill);
    }

    @Override
    public Boolean deleteBill(Long id) {
        if(existById(id))
        {
            billRepo.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public List<Bill> filterBill(String status, String pizzaType, String name,Pageable pageable) {
        Page<Bill> billPage = billRepo.searchBillByStatusContainingIgnoreCaseAndPizzaTypeContainingIgnoreCaseAndFullNameContainingIgnoreCase(status, pizzaType, name, pageable);
        return billPage.getContent();
    }

    @Override
    public Boolean existById(Long id) {
        return billRepo.existsById(id);
    }


}
