package com.cricmate.CricketRecordsApplication.Exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;


@ControllerAdvice
public class CustomExceptionHandler {
    @ExceptionHandler(CustomException.class)
    public ResponseEntity<ErrorResponse>handleCustomException(CustomException exception){
        ErrorResponse errorResponse = new ErrorResponse(exception.getHttpStatus().value(),exception.getMessage());
        return new ResponseEntity<>(errorResponse, exception.getHttpStatus());
    }
}
