package com.example.demo.converter;

import com.example.demo.api.ExchangeApi;
import com.example.demo.api.ExchangeRateApi;
import com.example.demo.api.NewApi;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
public class Converter {

    private ExchangeApi api;

    @Autowired
    public void setApi( @Qualifier("NewApi") ExchangeApi api) {
        this.api = api;
    }

    public float convert(String from, String to)
    {
        return api.getRate(from,to);
    }
}
