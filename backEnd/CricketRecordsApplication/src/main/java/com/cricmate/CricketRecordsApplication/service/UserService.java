package com.cricmate.CricketRecordsApplication.service;

import com.cricmate.CricketRecordsApplication.Entity.User;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.Optional;

public interface UserService {
    User createUser(User user);

    Optional<User> getUserById(Long id);
    Optional<User> UpdateUser(User user);

    void deleteUser(Long id);
    UserDetailsService userDetailsService();
}
