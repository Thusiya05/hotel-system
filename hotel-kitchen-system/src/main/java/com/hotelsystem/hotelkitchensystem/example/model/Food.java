package com.hotelsystem.hotelkitchensystem.example.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Food_Table")
public class Food {

    @Id
    @GeneratedValue
    private int foodId;
    private String foodName;
    private double price;
    private int availableQty;
    private String foodDescription;
}
