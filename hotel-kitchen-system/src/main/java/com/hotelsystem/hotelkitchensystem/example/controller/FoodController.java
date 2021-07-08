package com.hotelsystem.hotelkitchensystem.example.controller;

import com.hotelsystem.hotelkitchensystem.example.model.Food;
import com.hotelsystem.hotelkitchensystem.example.service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FoodController {

    @Autowired
    private FoodService foodService;

    //post
    @PostMapping("/addFood")
    public Food addFood(@RequestBody Food food){
        return foodService.saveFood(food);
    }

    @PostMapping("/addFoods")
    public List<Food> addFoods(@RequestBody List<Food> foods){
        return foodService.saveFoods(foods);
    }

    //get
    @GetMapping("/foods")
    public List<Food> findAllFoods(){
        return foodService.getFoods();
    }

    @GetMapping("/food/{foodId}")
    public Food findFoodById(@PathVariable int foodId){
        return foodService.getFoodById(foodId);
    }

    //@GetMapping("/food/{foodName}")
//    public Food findFoodByName(@PathVariable String foodName){
//        return foodService.getFoodByName(foodName);
//    }

    //update
    @PutMapping("/update")
    public Food updateFood(@RequestBody Food food){
        return foodService.updateFood(food);
    }

    @DeleteMapping("/delete/{foodId}")
    public String deleteFood(@PathVariable int foodId){
        return foodService.deleteFood(foodId);
    }

}
