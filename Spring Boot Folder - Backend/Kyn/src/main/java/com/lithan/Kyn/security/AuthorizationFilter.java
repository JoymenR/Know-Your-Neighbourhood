package com.lithan.Kyn.security;

import java.io.IOException;
import java.util.ArrayList;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import io.jsonwebtoken.Jwts;

public class AuthorizationFilter extends BasicAuthenticationFilter {

	public AuthorizationFilter(AuthenticationManager authenticationManager) {
		super(authenticationManager);
	}

	protected void doFilterInternal(HttpServletRequest request, 
			HttpServletResponse response, FilterChain filterChain)
			throws IOException, ServletException {
		
		System.out.println("----------Authorizatoin ---------");

		String header = request.getHeader("Authorization");
//		System.out.println("---------------------- Header is "+header);
		
		if (header==null || !header.startsWith("Bearer")) {
			System.out.println("inside if function");
			filterChain.doFilter(request, response);
			return;
		}
		UsernamePasswordAuthenticationToken authenticationToken = getAuthentication(request);
		System.out.println(" authenticationToken is "+authenticationToken);
		SecurityContextHolder.getContext().setAuthentication(authenticationToken);
		filterChain.doFilter(request, response);
	}

	private UsernamePasswordAuthenticationToken getAuthentication(HttpServletRequest request) {
		System.out.println("----------UsernamePasswordAuthenticationToken---------");

		String token = request.getHeader("Authorization");
		System.out.println("Token " + token);
		if (token != null) {
			String user = Jwts.parser().setSigningKey("SecretKeyToGenJWTs".getBytes())
					.parseClaimsJwt(token.replace("Bearer ", "")).getBody().getSubject();
			
			System.out.println("User " + user);
			if (user != null) {
				return new UsernamePasswordAuthenticationToken(user, null, new ArrayList<>());
			}
			else
			return null;
		}
		else
		return null;
	}

}
