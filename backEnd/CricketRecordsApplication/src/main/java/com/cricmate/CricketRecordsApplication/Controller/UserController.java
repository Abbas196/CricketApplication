package com.cricmate.CricketRecordsApplication.Controller;

import com.cricmate.CricketRecordsApplication.Entity.User;
import com.cricmate.CricketRecordsApplication.service.UserService;
import com.cricmate.CricketRecordsApplication.service.impl.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/user")
public class UserController {
    private final UserServiceImpl userService;

    @PostMapping("/createUser")
    public ResponseEntity<User> createUser(@RequestBody User user){
        return new ResponseEntity<>(userService.createUser(user), HttpStatus.CREATED);
    }

    @PostMapping("/deleteUser/{id}")
    public void deleteUser(@PathVariable(value = "id") Long id){
        Optional<User> user = userService.getUserById(id);
        System.out.println("User deleted");
    }
}
