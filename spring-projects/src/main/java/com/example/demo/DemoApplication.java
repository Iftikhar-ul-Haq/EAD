package com.example.demo;

import com.example.demo.api.ExchangeApi;
import com.example.demo.api.ExchangeRateApi;
import com.example.demo.converter.Converter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {

       ConfigurableApplicationContext context= SpringApplication.run(DemoApplication.class, args);
         ExchangeApi api=   context.getBean(ExchangeApi.class);
        Converter converter=context.getBean(Converter.class);
        System.out.println(api.getRate("PKR","USD"));
    }

}
