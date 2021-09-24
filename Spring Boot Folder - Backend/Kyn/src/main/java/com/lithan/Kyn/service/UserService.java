package com.lithan.Kyn.service;

import java.util.List;

import com.lithan.Kyn.entities.Users;

public interface UserService {
	public Users addUser(Users users);
	public Users login(Users users);
	public List<Users> getUsers();
}
