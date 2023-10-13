package com.cricmate.CricketRecordsApplication.Controller;


import com.cricmate.CricketRecordsApplication.Entity.User;
import com.cricmate.CricketRecordsApplication.dao.Request.SignInRequest;
import com.cricmate.CricketRecordsApplication.dao.Request.SignUpRequest;
import com.cricmate.CricketRecordsApplication.dao.Response.JwtAuthenticationResponse;
import com.cricmate.CricketRecordsApplication.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Value;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/auth")
public class AuthenticationController {
    @Value("${server.port}")
    private String serverPort;
    private final AuthenticationService authenticationService;

    @PostMapping("/user/signup")
    @CrossOrigin(origins = "http://localhost:${server.port}")
    public ResponseEntity<JwtAuthenticationResponse> signup(@RequestBody SignUpRequest request){
        return ResponseEntity.ok(authenticationService.signup(request));
    }

    @PostMapping("/user/signin")
    @CrossOrigin(origins = "http://localhost:${server.port}")
    public ResponseEntity<JwtAuthenticationResponse> signin(@RequestBody SignInRequest request){
        return ResponseEntity.ok(authenticationService.signin(request));
    }
}
