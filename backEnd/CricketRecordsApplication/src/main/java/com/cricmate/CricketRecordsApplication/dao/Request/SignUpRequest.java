package com.cricmate.CricketRecordsApplication.dao.Request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SignUpRequest {
    private String firstName;
    private String lastName;
    private String email;
    private String password;

    private String PlayingRole;
    private String BattingStyle;
    private  String BowlingStyle;

    private String Gender;

    private String phoneNumber;
}
