package com.cricmate.CricketRecordsApplication.dao.Response;


import com.cricmate.CricketRecordsApplication.Entity.User;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class JwtAuthenticationResponse {
    private String token;
    private User user;
}
