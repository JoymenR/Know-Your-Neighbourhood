package com.lithan.Kyn.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lithan.Kyn.entities.Users;
import com.lithan.Kyn.repo.UserRepository;


@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userRepo;

	@Override
	public Users addUser(Users users) {
		Users new_user = userRepo.save(users);
		return new_user;
	}

	@Override
	public List<Users> getUsers() {
		List<Users> users = userRepo.findAll();
		return users;
	}

	 @Override 
	  public Users login(Users users) { 
		  
		  
		  Users repouser = userRepo.findByuserName(users.getUserName()); 
		  if (repouser == null) { 
			  //throw new RuntimeException("User does not exist"); 
			  return null; }
						 
		if(!repouser.getUserPassword().equals(users.getUserPassword())) { 
			//throw new RuntimeException("Password is incorrect"); 
			return null; } 
		
		return repouser;
						  
	  }
	 
	 }
	 


