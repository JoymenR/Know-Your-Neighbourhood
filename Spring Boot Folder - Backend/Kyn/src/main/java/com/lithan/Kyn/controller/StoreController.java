package com.lithan.Kyn.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lithan.Kyn.entities.Store;
import com.lithan.Kyn.service.StoreService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/store_controller")
public class StoreController {

	@Autowired
	private StoreService storeService;
	
	@PostMapping("/api/store")
	public  Store postStore(@RequestBody Store store)
	{	return storeService.addStore(store);
	}
	
	@GetMapping("/api/store")
	public List<Store> getStore()
	{	List<Store> store = storeService.getStore();
		return store;
	}	
		
	@DeleteMapping(value = "/api/store/{id}")
	public void deleteStore(@PathVariable Integer id)
	{	storeService.deleteStoreById(id);
	}
	
	@GetMapping(value = "/api/store/{Storeid}")
	public Optional<Store> findStoreById(@PathVariable Integer Storeid) {
		System.out.println("Get Store By Id");
		return storeService.findStoreById(Storeid);
	}
	
	@RequestMapping(value = "/api/store/{Storeid}", 
			  produces = "application/json", 
			  method=RequestMethod.PUT)
			public Store updateStore(@RequestBody Store store,@PathVariable Integer Storeid) {
				Optional<Store> oldStore=storeService.findStoreById(Storeid);
				if(oldStore.isPresent())
				{
					Store obj=oldStore.get();
					obj.setStoreName(store.getStoreName());
					obj.setStoreNumber(store.getStoreNumber());
					obj.setStoreLocation(store.getStoreLocation());
					return storeService.addStore(obj);
					
				}	
				else 
				{	return storeService.addStore(store);
				}
			}
	
	 @GetMapping("/api/search_store/{searchKeyword}") 
	 public List<Store> searchForStore(@PathVariable("searchKeyword") String searchKeyword) {
		 List<Store> store = storeService.searchForStore(searchKeyword); 
		 return store; 
	 }
	 
}
