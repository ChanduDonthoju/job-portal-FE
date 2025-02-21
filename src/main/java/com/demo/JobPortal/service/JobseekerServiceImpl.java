package com.demo.JobPortal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.demo.JobPortal.entity.Jobseeker;
import com.demo.JobPortal.repository.JobseekerRepository;
@Service
public class JobseekerServiceImpl implements JobseekerService {
	
	@Autowired
	private JobseekerRepository jobseekerRepository;

	@Override
	public List<Jobseeker> getAllJobseekers() {
		List<Jobseeker> jobseekerList = jobseekerRepository.findAll();
		return jobseekerList;
	}

	@Override
	 public ResponseEntity<Jobseeker> getJobseekerById(long id) {
        Optional<Jobseeker> jobseeker = jobseekerRepository.findById(id);
        
        if (jobseeker.isPresent()) {
            return new ResponseEntity<>(jobseeker.get(), HttpStatus.OK);  // Return jobseeker if found with HTTP 200 OK
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);  // Return 404 if not found
        }
    }

	@Override
	public Jobseeker addJobseeker(Jobseeker jobseeker) {
		
		return jobseekerRepository.save(jobseeker);
	}

	@Override
	public ResponseEntity<String> deleteJobseeker(long id) {
        Optional<Jobseeker> jobseeker = jobseekerRepository.findById(id);
        
        if (jobseeker.isPresent()) {
            jobseekerRepository.deleteById(id);
            return new ResponseEntity<>("Jobseeker deleted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Jobseeker not found with given id", HttpStatus.NOT_FOUND);
        }
    }

	@Override
	public Jobseeker updateJobseeker(Jobseeker jobseeker) {
		
		return jobseekerRepository.save(jobseeker);
	}

	@Override
	public List<Jobseeker> getJobseekersByQualification(String degree) {
		return jobseekerRepository.getJobseekersByQualification(degree);
	}

	@Override
	public List<Jobseeker> getJobseekerByExperience(int experience) {
		return jobseekerRepository.getJobseekerByExperience(experience);
	}

}
