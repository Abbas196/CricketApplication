package com.cricmate.CricketRecordsApplication.service.impl;


import com.cricmate.CricketRecordsApplication.Entity.User;
import com.cricmate.CricketRecordsApplication.Repository.UserRepository;
import com.cricmate.CricketRecordsApplication.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;


    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    @Override
    public Optional<User> UpdateUser(User user) {
        Optional<User> userdetail = userRepository.findById(user.getUserId());
        userdetail.orElseThrow().setFirstName(user.getFirstName());
        userdetail.orElseThrow().setLastName(user.getLastName());
        userdetail.orElseThrow().setPassword(user.getPassword());
        return userdetail;

    }

    @Override
    public void deleteUser(Long id) {
        Optional<User> user = userRepository.findById(id);
        userRepository.deleteById(user.get().getUserId());
    }


    @Override
    public UserDetailsService userDetailsService() {
        return new UserDetailsService() {
            @Override
            public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
                return userRepository.findByEmail(username).orElseThrow(() -> new UsernameNotFoundException("user not found"));
            }
        };
    }
}
