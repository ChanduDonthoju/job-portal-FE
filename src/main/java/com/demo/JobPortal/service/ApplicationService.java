package com.demo.JobPortal.service;

import java.util.List;

import com.demo.JobPortal.entity.Application;

public interface ApplicationService {
	
	public Application addApplication(Application application);
	public Application updateApplication(Application application);
	public List<Application> getAllApplications();
	public List<Application> getApplicationsByJobseeker(long jobseekerId);//q
	public List<Application> getApplicationsByJobpost(long jobpostId);//q
	
	

}
