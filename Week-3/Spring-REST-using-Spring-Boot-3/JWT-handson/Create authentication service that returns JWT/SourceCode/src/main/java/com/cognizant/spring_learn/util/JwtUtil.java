package com.cognizant.spring_learn.util;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {

    private static final Key SECRET_KEY =
            Keys.hmacShaKeyFor(
                    "ThisIsASecretKeyForJwtAuthentication1234567890"
                            .getBytes(StandardCharsets.UTF_8));

    public String generateToken(UserDetails userDetails) {

        return Jwts.builder()
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1200000))
                .signWith(SECRET_KEY)
                .compact();
    }
}