package com.example.spring.model.services;

import com.example.spring.model.entities.Bill;
import com.example.spring.model.repositories.BillRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class BillService implements IBillService {
    @Autowired
    private BillRepo billRepo;


    @Override
    public List<Bill> showAll() {
        return billRepo.findAll();
    }

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
        Optional<Bill> bill = billRepo.findById(id);
        if(existById(id))
        {
            billRepo.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public List<Bill> searchByName(String name) {
        return billRepo.searchBillByFullNameIsContainingIgnoreCase(name);
    }

    @Override
    public List<Bill> filterBill(String status, String pizzaType) {
        return billRepo.searchBillByStatusContainingIgnoreCaseAndPizzaTypeContainingIgnoreCase(status, pizzaType);
    }

    @Override
    public Boolean existById(Long id) {
        return billRepo.existsById(id);
    }


}
