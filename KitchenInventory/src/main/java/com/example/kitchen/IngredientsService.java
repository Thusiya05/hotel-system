package com.example.kitchen;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IngredientsService extends JpaRepository<IngredientsTable, Integer> {

	@Override
	List<IngredientsTable> findAll();  
	
//	IngredientsTable addIngredient(IngredientsTable ingredient) {
//		if(ingredient.getIID() == null) {
//			ingredient.setIID()
//		}
//	}
	
}
