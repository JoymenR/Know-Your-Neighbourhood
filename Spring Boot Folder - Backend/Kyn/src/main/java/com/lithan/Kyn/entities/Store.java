package com.lithan.Kyn.entities;

import javax.persistence.*;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

@Entity
@EnableAutoConfiguration
public class Store {
	@Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
	private int Storeid;
	private String StoreName;
	private String StoreNumber;
	private String StoreLocation;
	
	public int getStoreid() {
		return Storeid;
	}
	public void setStoreid(int storeid) {
		Storeid = storeid;
	}
	public String getStoreName() {
		return StoreName;
	}
	public void setStoreName(String storeName) {
		StoreName = storeName;
	}
	public String getStoreNumber() {
		return StoreNumber;
	}
	public void setStoreNumber(String storeNumber) {
		StoreNumber = storeNumber;
	}
	public String getStoreLocation() {
		return StoreLocation;
	}
	public void setStoreLocation(String storeLocation) {
		StoreLocation = storeLocation;
	}
	
	public Store(int storeid, String storeName, String storeNumber, String storeLocation) {
		super();
		Storeid = storeid;
		StoreName = storeName;
		StoreNumber = storeNumber;
		StoreLocation = storeLocation;
	}
	
	public Store() {
		
	}
	
}
