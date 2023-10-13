package com.cricmate.CricketRecordsApplication.service;

import org.springframework.security.core.userdetails.UserDetails;

public interface jwtService {
    String extractUsername(String token);
    String generateToken(UserDetails userDetails);

    boolean isValidToken(String token, UserDetails userDetails);
}
