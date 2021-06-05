package com.example.webapplication.Student;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.lang.reflect.Array;
import java.time.LocalDate;
import java.time.Month;
import java.util.Arrays;
import java.util.List;

import static java.util.Calendar.FEBRUARY;
import static java.util.Calendar.JANUARY;

@Configuration
public class StudentConfig {
    @Bean
    CommandLineRunner commandLineRunner(StudentRepository repository){
        return args -> {
          Student iftikhar=  new Student(1L,"iftikhar","iftikharulhaq043@gmail.com", LocalDate.of(2000,Month.JANUARY,11));
            Student Ahsan=  new Student("Ahsan","Ahsan@gmail.com", LocalDate.of(2001,Month.APRIL,2));

            repository.saveAll(
                    Arrays.asList(iftikhar,Ahsan)
                    );

        };


    }
}
