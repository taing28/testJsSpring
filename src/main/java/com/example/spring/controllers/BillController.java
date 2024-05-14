package com.example.spring.controllers;

import com.example.spring.model.entities.Bill;
import com.example.spring.model.services.BillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/bill")
public class BillController {
    @Autowired
    private BillService billService;

    @GetMapping
    private ResponseEntity<?> getAllBill(){
        List<Bill> billList = billService.showAll();
        if (billList.isEmpty()){
            return ResponseEntity.badRequest().body("There is no order");
        }
        return ResponseEntity.ok(billList);
    }

    @PostMapping
    private ResponseEntity<?> addNewBill(@RequestBody Bill newBill) {
        return ResponseEntity.ok(billService.addNewBill(newBill));
    }

    @PutMapping
    private ResponseEntity<?> updateBill(@RequestBody Bill reBill) {
        Bill bill = billService.updateBill(reBill);
        if(bill == null) {
            return ResponseEntity.badRequest().body("There is no bill like that");
        }
        return ResponseEntity.ok(billService.updateBill(reBill));
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<?> deleteBill(@PathVariable Long id){
        if(!billService.deleteBill(id)) {
            return ResponseEntity.badRequest().body("There is no bill like that");
        }
        return ResponseEntity.ok("Delete successfully");
    }

    @GetMapping("/filter")
    private ResponseEntity<?> filterBill(@RequestParam(defaultValue = "") String status,@RequestParam(defaultValue = "") String pizzaType ){
        List<Bill> billList = billService.filterBill(status, pizzaType);
        if (billList.isEmpty()){
            return ResponseEntity.badRequest().body("There is no order");
        }
        return ResponseEntity.ok(billList);
    }

    @GetMapping("/search")
    private ResponseEntity<?> searchByName(@RequestParam(defaultValue = "") String name) {
        List<Bill> billList = billService.searchByName(name);
        if (billList.isEmpty()){
            return ResponseEntity.badRequest().body("There is no order");
        }
        return ResponseEntity.ok(billList);
    }
}
