package com.demo.JobPortal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.JobPortal.entity.Application;
import com.demo.JobPortal.repository.ApplicationRepository;

@Service
public class ApplicationServiceImpl implements ApplicationService {
	
	@Autowired
	private ApplicationRepository applicationRepository;

	@Override
	public Application addApplication(Application application) {
		return applicationRepository.save(application);
	}

	@Override
	public List<Application> getAllApplications() {
		return applicationRepository.findAll();
	}

	@Override
	public List<Application> getApplicationsByJobseeker(long jobseekerId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Application> getApplicationsByJobpost(long jobpostId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Application updateApplication(Application application) {
		return applicationRepository.save(application);
	}

}
