package com.lithan.Kyn.security;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.simple.JSONObject;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.core.userdetails.User;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.lithan.Kyn.entities.Users;

import io.jsonwebtoken.Jwts;


public class AuthenticationFilter extends UsernamePasswordAuthenticationFilter {

	private AuthenticationManager authenticationManager;

	public AuthenticationFilter(AuthenticationManager authenticationManager) {
		System.out.println("----------AuthenticationFilter---------");
		this.authenticationManager = authenticationManager;
		setFilterProcessesUrl("/login");
	}

	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
			throws AuthenticationException {
		try {
			Users users = new ObjectMapper().readValue(request.getInputStream(), Users.class);	
			System.out.println("----------Users is ---------"+users);
			return authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(users.getUserName(), users.getUserPassword(), new ArrayList<>()));
		} catch (IOException e) {
			throw new RuntimeException("Could not read request" + e);
		}

	}

	@Override
	protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
			Authentication authResult) throws IOException, ServletException {		
		System.out.println("----------Success ful AuthenticationFilter---------");
		String token = Jwts.builder().setSubject(((User) authResult.getPrincipal()).getUsername())
				.setExpiration(new Date(System.currentTimeMillis() + 1554_000_000)).compact();
		
		System.out.println("----------Token ---------" + token);
		String body = ((User) authResult.getPrincipal()).getUsername() + " " + token;
		String username = ((User) authResult.getPrincipal()).getUsername();

		  JSONObject obj=new JSONObject();    
		  obj.put("username",username);    
		  obj.put("accessToken",token);    

		response.addHeader("Authorization", "Bearer " + token);
		response.getWriter().write(obj.toJSONString());
		response.getWriter().flush();
	}
}
