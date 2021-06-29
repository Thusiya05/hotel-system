package com.example.kitchen;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class KitchenController {
	
//	@Autowired
//	IngredientsService ingredientsService;
//
//	@GetMapping(path = "getdata")
//	List<IngredientsTable> getIngredients(){
//		return ingredientsService.findAll();
//	}
//	
//	@PostMapping(path="/insertdata") // Map ONLY POST Requests
//	 
//	  public @ResponseBody String addNewIngredients (@RequestParam String name
//		      , @RequestParam Integer qty)  {
//	    
//	    IngredientsTable ingTable = new IngredientsTable();
//	    ingTable.setName(name);
//	    ingTable.setQty(qty);
//	    ingredientsService.save(ingTable);
//	    return "Saved";
//	  }
//	
	
	
	
	private final IngredientsService ingredientsService;

	@Autowired
	public KitchenController(IngredientsService ingredientsService) {
		this.ingredientsService = ingredientsService;
	}
}



