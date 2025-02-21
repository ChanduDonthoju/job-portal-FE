package com.demo.JobPortal.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.JobPortal.entity.Jobpost;
import com.demo.JobPortal.service.JobpostService;


@CrossOrigin("*")
@RestController
@RequestMapping("/jobpost")
public class JobpostController {

    @Autowired
    private JobpostService jobpostService;

    
    @GetMapping("/getalljobposts")
    public List<Jobpost> getAllJobPosts() {
		return jobpostService.getAllJobPosts();
    	
    }
   
    @PostMapping("/addjobpost")
    public ResponseEntity<Jobpost> addJobpost(@RequestBody Jobpost jobpost) {
        Jobpost addedJobpost = jobpostService.addJobpost(jobpost);
        return new ResponseEntity<Jobpost>(addedJobpost, HttpStatus.CREATED);
    }

    
    @PutMapping("/{id}")
    public ResponseEntity<?> updateJobpost(@PathVariable long id, @RequestBody Jobpost jobpostDetails) {
        Optional<Jobpost> jobpostOptional = jobpostService.getById(id);
        if (jobpostOptional.isPresent()) {
            Jobpost jobpost = jobpostOptional.get();
            jobpost.setTitle(jobpostDetails.getTitle());
            jobpost.setDescription(jobpostDetails.getDescription());
            jobpost.setLocation(jobpostDetails.getLocation());
            jobpost.setSalary(jobpostDetails.getSalary());
            jobpost.setPostedDate(jobpostDetails.getPostedDate());

            Jobpost updatedJobpost = jobpostService.updateJobpost(jobpost);
            return new ResponseEntity<Jobpost>(updatedJobpost, HttpStatus.OK);
        } else {
            return new ResponseEntity<String>("Jobpost not Updated",HttpStatus.NOT_FOUND);
        }
    }

    
    @DeleteMapping("/deletejobpost/{id}")
    public ResponseEntity<String> deleteJobpost(@PathVariable long id) {
        Optional<Jobpost> jobpost = jobpostService.deleteJobpost(id);
        if (jobpost.isPresent()) {
            return new ResponseEntity<>("Jobpost deleted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Jobpost not found", HttpStatus.NOT_FOUND);
        }
    }

   
    @GetMapping("/getjobpostbytitle/{title}")
    public ResponseEntity<List<Jobpost>> getByTitle(@PathVariable String title) {
        List<Jobpost> jobposts = jobpostService.getByTitle(title);
        return new ResponseEntity<>(jobposts, HttpStatus.OK);
    }

    
    @GetMapping("/getjobpostbysalary/{salary}")
    public ResponseEntity<List<Jobpost>> getBySalary(@PathVariable double salary) {
        List<Jobpost> jobposts = jobpostService.getBySalary(salary);
        return new ResponseEntity<>(jobposts, HttpStatus.OK);
    }

    
    @GetMapping("/getjobpostbylocation/{location}")
    public ResponseEntity<List<Jobpost>> getByLocation(@PathVariable String location) {
        List<Jobpost> jobposts = jobpostService.getByLocation(location);
        return new ResponseEntity<>(jobposts, HttpStatus.OK);
    }

    
    @GetMapping("/sortByDate")
    public ResponseEntity<List<Jobpost>> sortByDate() {
        List<Jobpost> jobposts = jobpostService.sortByDate();
        return new ResponseEntity<>(jobposts, HttpStatus.OK);
    }

}
