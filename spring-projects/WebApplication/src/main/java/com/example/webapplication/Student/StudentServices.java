package com.example.webapplication.Student;

import net.bytebuddy.implementation.bytecode.Throw;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.Month;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class StudentServices {

    protected static StudentRepository studentRepository;

    @Autowired
    public StudentServices(StudentRepository studentRepository) {
        this.studentRepository=studentRepository;
    }

    public List<Student> getStudents(){
        return studentRepository.findAll();
    }

    public void addNewStudent(Student student) {

       Optional<Student> studentOptional= studentRepository.findStudentByEmail(student.getEmail());
       if(studentOptional.isPresent())
           throw new IllegalStateException("Email Already Taken");
       studentRepository.save(student);
    }

    public void deleteStudent(Long studentId) {
        boolean extist=studentRepository.existsById(studentId);
        if(!extist)
        {
            throw  new IllegalStateException("Student Does not Exits with Id "+studentId);
        }
        studentRepository.deleteById(studentId);
    }

    @Transactional
    public void updateStudent(Long studentId, String name, String email) {

        Student student=studentRepository.findById(studentId).orElseThrow(()->new IllegalStateException("student doesn't exits"));
        if(name!=null && name.length()>0 && !Objects.equals(student.getName(),name)){

            student.setName(name);
        }

        if(email!=null && email.length()>0 &&  !Objects.equals(student.getEmail(),email)  ){
            Optional<Student> optionalStudent=studentRepository.findStudentByEmail(email);
            if(optionalStudent.isPresent()){
                throw new IllegalStateException("Student Already Exist");
            }
            student.setEmail(email);
        }
    }
}
