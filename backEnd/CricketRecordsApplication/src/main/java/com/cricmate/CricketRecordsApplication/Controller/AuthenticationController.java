package com.cricmate.CricketRecordsApplication.Controller;


import com.cricmate.CricketRecordsApplication.Entity.User;
import com.cricmate.CricketRecordsApplication.Exception.AuthenticationException;
import com.cricmate.CricketRecordsApplication.Exception.ErrorResponse;
import com.cricmate.CricketRecordsApplication.dao.Request.SignInRequest;
import com.cricmate.CricketRecordsApplication.dao.Request.SignUpRequest;
import com.cricmate.CricketRecordsApplication.dao.Response.JwtAuthenticationResponse;
import com.cricmate.CricketRecordsApplication.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Value;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/auth")
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/user/signup")
    public ResponseEntity<JwtAuthenticationResponse> signup(@RequestBody SignUpRequest request){
        return ResponseEntity.ok(authenticationService.signup(request));
    }

    @PostMapping("/user/signin")
    public ResponseEntity<?> signin(@RequestBody SignInRequest request){
        try {
            JwtAuthenticationResponse response = authenticationService.signin(request);
            return ResponseEntity.ok(response);
        } catch (AuthenticationException e) {
            ErrorResponse errorResponse = new ErrorResponse(HttpStatus.UNAUTHORIZED.value(), "Authentication failed: Invalid credentials");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorResponse);
        }
    }
}
