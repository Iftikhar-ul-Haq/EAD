package com.example.demo.api;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
@Primary
@Qualifier("NewApi")
public class NewApi implements  ExchangeApi{
    @Override
    public float getRate(String from, String to) {
        return 1.0f;
    }
}
