package com.lithan.Kyn.security;

import java.util.Collections;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import com.lithan.Kyn.entities.Users;
import com.lithan.Kyn.repo.UserRepository;

@Component
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private UserRepository userRepo;

	public UserDetailsServiceImpl(UserRepository userRepository) {
		this.userRepo = userRepository;
	}

	@Override
	public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException {
		Users user = userRepo.findByuserName(name);
		if (user == null) {
			throw new UsernameNotFoundException(name);
		}
		return new org.springframework.security.core.userdetails.User(user.getUserName(), user.getUserPassword(),
				Collections.emptyList());
	}
}
