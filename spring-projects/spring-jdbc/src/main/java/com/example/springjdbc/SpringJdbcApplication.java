package com.example.springjdbc;

import lombok.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.web.client.RestTemplate;

import javax.websocket.OnClose;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Collections;
import java.util.SplittableRandom;

@SpringBootApplication
public class SpringJdbcApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringJdbcApplication.class, args);
    }

    @Bean RestTemplate restTemplate(){
        return  new RestTemplate();
    }

    @Bean
    public CommandLineRunner clr(RestTemplate restTemplate){
        return new CommandLineRunner() {
            @Override
            public void run(String... args) throws Exception {
               ApiResponse results= restTemplate.getForObject("https://randomuser.me/api", ApiResponse.class, Collections.singletonMap("result",10));
                System.out.println(results);
            }
        };
    }




}

@ToString
@Data
class ApiResponse{
    User[] results;
}

@Data
@NoArgsConstructor
 class User {
    Name name;
    String gender;

}

@ToString
@Data
class Name{
    String first;
    String Last;
}

@NoArgsConstructor
@Data
@AllArgsConstructor
class Customer{
    private  String name;


}
