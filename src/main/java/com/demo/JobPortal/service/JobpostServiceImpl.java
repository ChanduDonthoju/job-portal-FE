package com.demo.JobPortal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.JobPortal.entity.Jobpost;
import com.demo.JobPortal.repository.JobpostRepository;

@Service
public class JobpostServiceImpl implements JobpostService {
	
	@Autowired
	private JobpostRepository jobpostRepository;

	@Override
	public List<Jobpost> getByTitle(String title) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Jobpost> getBySalary(double salary) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Jobpost> getByLocation(String location) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Jobpost> sortByDate() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Jobpost addJobpost(Jobpost jobpost) {
		
		return jobpostRepository.save(jobpost);
	}

	@Override
	public Jobpost updateJobpost(Jobpost jobpost) {
		
		return jobpostRepository.save(jobpost);
	}

	@Override
	public Optional<Jobpost> deleteJobpost(long id) {
		Optional<Jobpost> jobpost = jobpostRepository.findById(id);
		if(jobpost!=null)
		{
			jobpostRepository.deleteById(id);
			return jobpost;
		}
		else 
		{
			throw new Error("jobpost not found with given id");
		}
	}

	@Override
	public Optional<Jobpost> getById(long id) {
		return jobpostRepository.findById(id);
	}

	@Override
	public List<Jobpost> getAllJobPosts() {
		// TODO Auto-generated method stub
		return jobpostRepository.findAll();
	}

}
