package com.demo.JobPortal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.demo.JobPortal.entity.Jobseeker;
import com.demo.JobPortal.service.JobseekerService;


@CrossOrigin("*")
@RestController
@RequestMapping("/jobseeker")
public class JobseekerController {
	
	@Autowired
	JobseekerService jobseekerService;
	
	@GetMapping("/getalljobseekers")
	public List<Jobseeker> getAllJobseekers() {
		return jobseekerService.getAllJobseekers();
	}
	
	@GetMapping("/getjobseeker/{id}")
	public ResponseEntity<Jobseeker> getJobseekerById(@PathVariable long id) {
		return jobseekerService.getJobseekerById(id);
	}
	
	@PostMapping("/addjobseeker")
	public Jobseeker addJobseeker(@RequestBody Jobseeker jobseeker) {
		return jobseekerService.addJobseeker(jobseeker);
	}
	
	@PutMapping("/updatejobseeker")
	public Jobseeker updateJobseeker(Jobseeker jobseeker) {
		return jobseekerService.updateJobseeker(jobseeker);
	}
	
	@DeleteMapping("/deletejobseeker/{id}")
	public ResponseEntity<String> deleteJobseeker(@PathVariable long id) {
		return jobseekerService.deleteJobseeker(id);
	}
	
	@GetMapping("/getjobseekerbyqualification/{degree}")
	public List<Jobseeker> getJobseekerByQualification(@PathVariable String degree) {
		return jobseekerService.getJobseekersByQualification(degree);
	}
	
	@GetMapping("/getjobseekerbyexperience/{years}")
	public List<Jobseeker> getJobseekerByExperience(@PathVariable int years) {
		return jobseekerService.getJobseekerByExperience(years);
	}
	

}
