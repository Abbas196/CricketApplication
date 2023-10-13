package com.cricmate.CricketRecordsApplication.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/v1/resource")
@RequiredArgsConstructor
@CrossOrigin("*")
public class AuthorizationController {
    @Value("${server.port}")
    private String serverPort;
    @GetMapping
    @CrossOrigin(origins = "http://localhost:${server.port}")
    public ResponseEntity<String> sayHello() {
        return ResponseEntity.ok("Here is your resource");
    }
}
