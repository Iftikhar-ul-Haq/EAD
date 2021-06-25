package com.example.restapi.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@NoArgsConstructor
@Entity
public class Question {

    @Id
    @GeneratedValue
    private Long id;
    private String questionDescription;
    private String type;

}
