package com.cricmate.CricketRecordsApplication.Controller;


import com.cricmate.CricketRecordsApplication.Entity.User;
import com.cricmate.CricketRecordsApplication.dao.Request.SignInRequest;
import com.cricmate.CricketRecordsApplication.dao.Request.SignUpRequest;
import com.cricmate.CricketRecordsApplication.dao.Response.JwtAuthenticationResponse;
import com.cricmate.CricketRecordsApplication.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
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
    public ResponseEntity<JwtAuthenticationResponse> signin(@RequestBody SignInRequest request){
        return ResponseEntity.ok(authenticationService.signin(request));
    }
}
