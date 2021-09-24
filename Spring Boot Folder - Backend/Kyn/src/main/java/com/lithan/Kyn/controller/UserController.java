package com.lithan.Kyn.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lithan.Kyn.entities.Users;
import com.lithan.Kyn.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired
	private UserService userService;
	
	@Autowired 
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@PostMapping("/api")
	public Users addUser(@RequestBody Users users) {
		users.setUserPassword(bCryptPasswordEncoder.encode(users.getUserPassword()));
			return userService.addUser(users);
	}
}
