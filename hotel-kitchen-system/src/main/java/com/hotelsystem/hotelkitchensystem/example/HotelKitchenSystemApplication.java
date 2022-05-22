package com.hotelsystem.hotelkitchensystem.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class HotelKitchenSystemApplication {

    public static void main(String[] args) {
        SpringApplication.run(HotelKitchenSystemApplication.class, args);
    }

}
