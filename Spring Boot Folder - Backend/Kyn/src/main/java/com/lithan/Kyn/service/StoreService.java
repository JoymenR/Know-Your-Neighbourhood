package com.lithan.Kyn.service;

import java.util.List;
import java.util.Optional;

import com.lithan.Kyn.entities.Store;

public interface StoreService {
	public Store addStore(Store store);
	public List<Store> getStore();
	public Optional<Store> findStoreById(int Storeid);
	public void  deleteStoreById(int id);
	public List<Store> searchForStore(String searchKeyword);
}
