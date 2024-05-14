package com.example.spring.model.entities;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
public class Bill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String combo;
    private Integer diameter;//Duong kinh
    private Integer bakedRibs;//Suon nuong
    private String drink;
    private Integer drinkQuantity;
    private Long voucherId = 0L;
    private String pizzaType;
    private String salad;
    private Double totalPrice;
    private Double sale = 0.0;

    private String fullName;
    private String email;
    private String phone;
    private String address;
    private String note = "";
    private String status;//Open, Cancel, Confirm
    private LocalDate createDate = LocalDate.now();
    private LocalDate updateDate = LocalDate.now();
}
