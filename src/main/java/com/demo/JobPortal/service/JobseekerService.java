package com.demo.JobPortal.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.demo.JobPortal.entity.Jobseeker;

public interface JobseekerService {
	
	public List<Jobseeker> getAllJobseekers();
	public ResponseEntity<Jobseeker> getJobseekerById(long id);
	public Jobseeker addJobseeker(Jobseeker jobseeker);
	public ResponseEntity<String> deleteJobseeker(long id);
	public Jobseeker updateJobseeker(Jobseeker jobseeker);
	public List<Jobseeker> getJobseekersByQualification(String degree);//q
	public List<Jobseeker> getJobseekerByExperience(int experience);//q
	
	

}
