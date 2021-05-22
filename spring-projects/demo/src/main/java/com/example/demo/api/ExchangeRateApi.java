package com.example.demo.api;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
@Qualifier("ExchangeRateApi")
public class ExchangeRateApi implements ExchangeApi {
    public float getRate(String from, String to)
    {
        return 0.0f;
    }
}
