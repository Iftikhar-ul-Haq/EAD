package com.example.profileapplication;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ProfileApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProfileApplication.class, args);
    }

    @Bean
    CommandLineRunner clr(@Value("${spring.datasource.url}") String url){
        return new CommandLineRunner() {
            @Override
            public void run(String... args) throws Exception {
                System.out.println("Db url: "+url);
            }
        };
    }
}
