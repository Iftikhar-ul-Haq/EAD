package com.example.restapi.controller;

import com.example.restapi.model.Question;
import com.example.restapi.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class QuestionController {

    @Autowired
    QuestionService questionService;

    @PostMapping
    public Question saveData(@RequestBody Question question)
    {
        return questionService.saveQuestion(question);
    }

}
