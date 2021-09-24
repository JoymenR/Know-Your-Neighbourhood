package com.lithan.Kyn.service;

import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lithan.Kyn.entities.Store;
import com.lithan.Kyn.repo.StoreRepository;

@Service
@Transactional
public class StoreServiceImpl implements StoreService {

	@Autowired
	StoreRepository storeRepo;
	
	@Override
	public Store addStore(Store store) {
		return storeRepo.save(store);
	}
	
	@Override
	public List<Store> getStore() {
		List <Store> store = storeRepo.findAll();
		return store;
	}
	
	@Override
	public void deleteStoreById(int id) {
		storeRepo.deleteById(id);
	}

	@Override
	public Optional<Store> findStoreById(int StoreId) {
		return storeRepo.findById(StoreId);
	}
	
	 @Override 
	 public List<Store> searchForStore(String searchKeyword) { 
		 List<Store> store = storeRepo.searchForStore(searchKeyword); 
		 return store; 
	 }
}
