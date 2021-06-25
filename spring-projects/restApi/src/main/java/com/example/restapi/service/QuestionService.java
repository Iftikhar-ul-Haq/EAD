package com.example.restapi.service;

import com.example.restapi.model.Question;
import com.example.restapi.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuestionService {

    @Autowired
    QuestionRepository questionRepository;

    public Question saveQuestion(Question question){
       return questionRepository.save(question);
    }

}
